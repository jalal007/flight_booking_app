import { StorageKey } from '@constants/app.constants'
import { environment } from '@config/environment'
import { storageService } from '@services/storage/storage.service'

import { ApiError, type ApiErrorPayload, type ApiQueryParams } from './types'

interface HttpClientOptions {
  baseUrl: string
  timeoutMs: number
}

interface RequestOptions extends RequestInit {
  auth?: boolean
  query?: ApiQueryParams
}

class HttpClient {
  private readonly baseUrl: string
  private readonly timeoutMs: number

  constructor(options: HttpClientOptions) {
    this.baseUrl = options.baseUrl
    this.timeoutMs = options.timeoutMs
  }

  async request<TResponse>(endpoint: string, options: RequestOptions = {}): Promise<TResponse> {
    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), this.timeoutMs)

    try {
      const response = await fetch(this.buildUrl(endpoint, options.query), {
        ...options,
        headers: await this.buildHeaders(options),
        signal: controller.signal,
      })

      const payload = await this.parseResponse(response)

      if (!response.ok) {
        throw new ApiError(this.toApiErrorPayload(response, payload))
      }

      return payload as TResponse
    } finally {
      window.clearTimeout(timeoutId)
    }
  }

  get<TResponse>(endpoint: string, options: RequestOptions = {}): Promise<TResponse> {
    return this.request<TResponse>(endpoint, { ...options, method: 'GET' })
  }

  post<TResponse, TBody extends Record<string, unknown>>(
    endpoint: string,
    body: TBody,
    options: RequestOptions = {},
  ): Promise<TResponse> {
    return this.request<TResponse>(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: 'POST',
    })
  }

  private buildUrl(endpoint: string, query?: ApiQueryParams): string {
    const url = new URL(`${this.baseUrl}${endpoint}`)

    Object.entries(query || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value))
      }
    })

    return url.toString()
  }

  private async buildHeaders(options: RequestOptions): Promise<Headers> {
    const headers = new Headers(options.headers)
    headers.set('Accept', 'application/json')

    if (options.body && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json')
    }

    if (options.auth) {
      const token = await storageService.getString(StorageKey.AuthToken)

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
    }

    return headers
  }

  private async parseResponse(response: Response): Promise<unknown> {
    if (response.status === 204) {
      return null
    }

    const contentType = response.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      return response.json() as Promise<unknown>
    }

    return response.text()
  }

  private toApiErrorPayload(response: Response, payload: unknown): ApiErrorPayload {
    if (this.isApiErrorPayload(payload)) {
      return {
        ...payload,
        status: response.status,
      }
    }

    return {
      message: response.statusText || 'Request failed',
      status: response.status,
    }
  }

  private isApiErrorPayload(payload: unknown): payload is ApiErrorPayload {
    return (
      typeof payload === 'object' &&
      payload !== null &&
      'message' in payload &&
      typeof (payload as { message?: unknown }).message === 'string'
    )
  }
}

export const apiClient = new HttpClient({
  baseUrl: environment.apiBaseUrl,
  timeoutMs: environment.apiTimeoutMs,
})

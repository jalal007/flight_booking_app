export interface ApiResponse<TData> {
  data: TData
  message?: string
  meta?: Record<string, unknown>
}

export interface ApiErrorPayload {
  code?: string
  errors?: Record<string, string[]>
  message: string
  status: number
}

export class ApiError extends Error {
  readonly payload: ApiErrorPayload

  constructor(payload: ApiErrorPayload) {
    super(payload.message)
    this.name = 'ApiError'
    this.payload = payload
  }
}

export type ApiQueryParams = Record<string, boolean | null | number | string | undefined>

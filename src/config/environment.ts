const DEFAULT_API_TIMEOUT_MS = 30_000

const normalizeBaseUrl = (url: string): string => url.replace(/\/+$/, '')

export const environment = {
  // TODO(api): Replace VITE_API_BASE_URL with the production Laravel REST API URL.
  apiBaseUrl: normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL || 'https://api.example.com'),
  apiTimeoutMs: Number(import.meta.env.VITE_API_TIMEOUT_MS || DEFAULT_API_TIMEOUT_MS),
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const

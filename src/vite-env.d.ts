/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  readonly VITE_API_TIMEOUT_MS?: string
  readonly VITE_APP_ID?: string
  readonly VITE_APP_NAME?: string
  readonly VITE_PRIVACY_POLICY_URL?: string
  readonly VITE_SUPPORT_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

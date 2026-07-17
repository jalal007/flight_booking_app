# API Integration Notes

Backend integration should happen after UI/UX design is finalized and the final screen/module list is known.

## Current Foundation

- Environment config: `src/config/environment.ts`
- App config: `src/config/app.config.ts`
- Endpoints: `src/services/api/endpoints.ts`
- HTTP client: `src/services/api/http-client.ts`
- API types: `src/services/api/types.ts`
- Storage abstraction: `src/services/storage/storage.service.ts`
- Token storage keys: `src/constants/app.constants.ts`

## Environment Variables

Copy `.env.example` to `.env` locally and set:

```bash
VITE_API_BASE_URL="https://your-api-domain.com"
VITE_API_TIMEOUT_MS=30000
```

Never commit `.env` files or credentials.

## Integration Path

1. Confirm backend base URL and API contract.
2. Add real endpoint keys in `src/services/api/endpoints.ts`.
3. Add route-level pages and feature modules based on the final UI/UX flow.
4. Add request/response types near the feature or in `src/services/api/types.ts`.
5. Use `apiClient.get` and `apiClient.post` from `http-client.ts`.
6. Use `storageService` for mobile-safe string storage.
7. Add route guards only when real session rules are known.
8. Add validation and error mapping after backend error formats are confirmed.

## Token Handling

The current foundation supports adding a bearer token to API requests when `auth: true` is passed. It does not perform session creation, token refresh, or real session management yet.

Before production, confirm:

- Access token lifetime.
- Refresh token strategy.
- Logout behavior.
- Unauthorized response handling.
- Secure storage requirements.
- Whether biometric or device-level protection is required.

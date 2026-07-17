export const RouteName = {
  Root: 'root',
} as const

export type RouteNameValue = (typeof RouteName)[keyof typeof RouteName]

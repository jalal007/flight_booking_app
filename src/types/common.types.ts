export type Nullable<T> = T | null

export interface SelectOption<TValue extends number | string = string> {
  disabled?: boolean
  label: string
  value: TValue
}

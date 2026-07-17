export const formatCurrency = (amount: number, currency = 'BDT', locale = 'en-BD'): string =>
  new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
  }).format(amount)

export const formatDateForDisplay = (date: Date, locale = 'en-BD'): string =>
  new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)

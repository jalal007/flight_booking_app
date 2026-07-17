import { describe, expect, it } from 'vitest'

import { formatCurrency, formatDateForDisplay } from '@utils/formatters'

describe('formatters', () => {
  it('formats BDT currency for Bangladesh locale', () => {
    expect(formatCurrency(12500)).toContain('12,500')
  })

  it('formats display dates without API dependencies', () => {
    expect(formatDateForDisplay(new Date('2026-06-09T00:00:00Z'))).toContain('2026')
  })
})

export const dateFormatter = new Intl.DateTimeFormat('en', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export const priceFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
})

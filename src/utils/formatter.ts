export const dateFormatter = new Intl.DateTimeFormat('en', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export const priceFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
})

export function dateStringFormatter(date: string) {
  if (!date) {
    return ''
  }

  const dateParts = dateFormatter.format(new Date(date)).split('/')

  const formattedDate = new Date(`
  ${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`).toLocaleDateString(
    'en-US',
    { month: 'long', day: 'numeric', year: 'numeric' },
  )

  return formattedDate
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export function formatMonthYear(value) {
  if (!value) return ''
  const [year, month] = value.split('-')
  if (!month) return year
  return `${MONTHS[Number(month) - 1]} ${year}`
}

export function formatPostDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

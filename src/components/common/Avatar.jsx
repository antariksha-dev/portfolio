import { getInitials } from '@/lib/initials'

export default function Avatar({ name, photoUrl, size = 96 }) {
  const dimension = { width: size, height: size }

  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={name}
        style={dimension}
        className="shrink-0 rounded-full object-cover ring-1 ring-border"
      />
    )
  }

  return (
    <div
      style={dimension}
      role="img"
      aria-label={name}
      className="flex shrink-0 items-center justify-center rounded-full bg-surface text-2xl font-medium text-heading ring-1 ring-border"
    >
      {getInitials(name)}
    </div>
  )
}

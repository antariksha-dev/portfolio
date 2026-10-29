import { useState } from 'react'
import MailIcon from '@/components/icons/MailIcon'

export default function EmailReveal({ email }) {
  const [revealed, setRevealed] = useState(false)

  if (revealed) {
    return (
      <a
        href={`mailto:${email.address}`}
        className="rounded-full border border-border px-3 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
      >
        {email.address}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setRevealed(true)}
      aria-label="Reveal email address"
      title="Click to reveal email"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
    >
      <MailIcon className="h-4 w-4" />
    </button>
  )
}

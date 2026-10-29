import { useState, useEffect } from 'react'
import MailIcon from '@/components/icons/MailIcon'

export default function EmailReveal({ email }) {
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timer
    if (revealed) {
      timer = setTimeout(() => setRevealed(false), 3000)
    }
    return () => clearTimeout(timer)
  }, [revealed])

  const handleClick = () => {
    navigator.clipboard.writeText(email.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
    if (!revealed) {
      setRevealed(true)
    }
  }

  if (revealed) {
    return (
      <div className="relative inline-block">
        <button
          type="button"
          onClick={handleClick}
          aria-label={copied ? "Email copied" : "Copy email to clipboard"}
          title={copied ? "Email copied" : "Click to copy"}
          className="rounded-full border border-border px-3 py-1.5 text-sm text-text transition-all duration-300 hover:border-accent hover:text-accent"
          style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
        >
          {email.address}
        </button>
        <span className={`absolute -top-7 left-1/2 -translate-x-1/2 bg-surface-strong px-2 py-1 text-xs text-text rounded shadow-sm whitespace-nowrap transition-opacity duration-[1400ms] ${copied ? 'opacity-100' : 'opacity-0'}`}>
          Email copied
        </span>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Reveal email address"
      title="Click to reveal email"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
    >
      <MailIcon className="h-4 w-4" />
    </button>
  )
}

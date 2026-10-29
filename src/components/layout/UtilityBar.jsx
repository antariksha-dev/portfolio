import { emailContact } from '@/data/social'
import ThemeToggle from '@/components/common/ThemeToggle'
import MailIcon from '@/components/icons/MailIcon'
import ArrowUpRightIcon from '@/components/icons/ArrowUpRightIcon'

export default function UtilityBar() {
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 sm:right-6 sm:top-6">
      <a
        href={`mailto:${emailContact.address}`}
        aria-label="Contact me by email (opens your mail app)"
        title="Contact me by email"
        className="flex h-8 items-center gap-1 rounded-full border border-border bg-bg px-2.5 text-text shadow-sm transition-colors hover:border-accent hover:text-accent"
      >
        <MailIcon className="h-4 w-4" />
        <ArrowUpRightIcon className="h-3 w-3" />
      </a>
      <ThemeToggle />
    </div>
  )
}

import XIcon from '@/components/icons/XIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import ArrowUpRightIcon from '@/components/icons/ArrowUpRightIcon'
import EmailReveal from '@/components/common/EmailReveal'

const ICONS = {
  x: XIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

export default function SocialLinks({ links, email }) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = ICONS[link.id]
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} (opens in new tab)`}
            title={link.isPlaceholder ? `${link.label} — placeholder link` : link.label}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-4 w-4 transition-opacity group-hover:opacity-30" />
            <ArrowUpRightIcon className="absolute h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        )
      })}
      {email ? <EmailReveal email={email} /> : null}
    </div>
  )
}

import { profile } from '@/data/profile'
import { socialLinks, emailContact } from '@/data/social'
import SocialLinks from '@/components/common/SocialLinks'
import Container from '@/components/layout/Container'

const currentYear = new Date().getFullYear()

export default function SiteFooter({ attached = false }) {
  return (
    <footer className={`${attached ? '' : 'mt-20'} border-t border-border py-10`}>
      <Container className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-text">
          &copy; {currentYear} {profile.name}
        </p>
        <SocialLinks links={socialLinks} email={emailContact} />
      </Container>
    </footer>
  )
}

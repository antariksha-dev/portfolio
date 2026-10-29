import { Link } from 'react-router'
import { profile } from '@/data/profile'
import Container from '@/components/layout/Container'

export default function SiteHeader() {
  return (
    <header className="border-b border-border">
      <Container className="py-5">
        <Link to="/" className="font-medium text-heading hover:text-accent">
          {profile.name}
        </Link>
      </Container>
    </header>
  )
}

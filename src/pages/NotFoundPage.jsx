import { Link } from 'react-router'
import Container from '@/components/layout/Container'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function NotFoundPage() {
  useDocumentMeta('Not found — Antariksha Sharma', 'This page does not exist.')

  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-heading">Page not found</h1>
      <p className="text-text">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-accent hover:underline">
        Back home
      </Link>
    </Container>
  )
}

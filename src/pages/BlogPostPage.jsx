import { useParams, Link } from 'react-router'
import { getPostBySlug } from '@/content/blog'
import Container from '@/components/layout/Container'
import MarkdownContent from '@/components/blog/MarkdownContent'
import { formatPostDate } from '@/lib/dates'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import NotFoundPage from '@/pages/NotFoundPage'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useDocumentMeta(
    post ? `${post.title} — Ant Blog` : 'Post not found — Ant Blog',
    post?.excerpt,
  )

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <Container className="py-12">
      <Link to="/blog" className="text-sm text-accent hover:underline">
        ← Back to Ant Blog
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-heading sm:text-3xl">{post.title}</h1>
      <p className="mt-2 text-sm text-text">
        {formatPostDate(post.date)} · {post.readTime}
      </p>
      <div className="mt-8">
        <MarkdownContent content={post.content} />
      </div>
    </Container>
  )
}

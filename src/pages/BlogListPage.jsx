import { allPosts } from '@/content/blog'
import Container from '@/components/layout/Container'
import BlogPostCard from '@/components/blog/BlogPostCard'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function BlogListPage() {
  useDocumentMeta('Ant Blog — Antariksha Sharma', 'Writing on programming, AI, and learning in public.')

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-semibold text-heading sm:text-3xl">Ant Blog</h1>
      <p className="mt-2 text-text">Notes on programming, AI, and learning things the slow way.</p>
      <ul className="mt-8 divide-y divide-border">
        {allPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </ul>
    </Container>
  )
}

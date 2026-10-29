import { Link } from 'react-router'
import { allPosts } from '@/content/blog'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import BlogPostCard from '@/components/blog/BlogPostCard'

export default function BlogPreviewSection() {
  const latest = allPosts.slice(0, 3)

  return (
    <section id="blog" className="py-10">
      <Container>
        <div className="flex items-baseline justify-between">
          <SectionHeading id="blog-heading">ant blog</SectionHeading>
          <Link to="/blog" className="text-sm text-accent hover:underline">
            View all posts →
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {latest.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

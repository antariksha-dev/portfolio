import { Link } from 'react-router'
import { formatPostDate } from '@/lib/dates'

export default function BlogPostCard({ post }) {
  return (
    <li className="py-6 first:pt-0 last:pb-0">
      <Link to={`/blog/${post.slug}`} className="group block">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="font-medium text-heading group-hover:text-accent">{post.title}</h3>
          <span className="text-sm text-text">{formatPostDate(post.date)}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-text">{post.excerpt}</p>
        <span className="mt-2 inline-block text-sm text-text">{post.readTime}</span>
      </Link>
    </li>
  )
}

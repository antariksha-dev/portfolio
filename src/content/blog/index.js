import { estimateReadTime } from '@/lib/readTime'

const modules = import.meta.glob('./*.js', { eager: true })

export const allPosts = Object.values(modules)
  .map((mod) => mod.post)
  .filter(Boolean)
  .map((post) => ({ ...post, readTime: estimateReadTime(post.content) }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug)
}

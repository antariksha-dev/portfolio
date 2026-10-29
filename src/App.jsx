import { Routes, Route } from 'react-router'
import HomePage from '@/pages/HomePage'
import BlogListPage from '@/pages/BlogListPage'
import BlogPostPage from '@/pages/BlogPostPage'
import NotFoundPage from '@/pages/NotFoundPage'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import UtilityBar from '@/components/layout/UtilityBar'

function BlogLayout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <>
      <UtilityBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog"
          element={
            <BlogLayout>
              <BlogListPage />
            </BlogLayout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <BlogLayout>
              <BlogPostPage />
            </BlogLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

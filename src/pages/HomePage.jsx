import Hero from '@/components/home/Hero'
import TimelineSection from '@/components/home/TimelineSection'
import BioSection from '@/components/home/BioSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import TeachingSection from '@/components/home/TeachingSection'
import BlogPreviewSection from '@/components/home/BlogPreviewSection'
import SiteFooter from '@/components/layout/SiteFooter'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { profile } from '@/data/profile'

export default function HomePage() {
  useDocumentMeta(profile.name, profile.tagline)

  return (
    <div>
      <Hero />
      <TimelineSection />
      <BioSection />
      <div className="bg-surface">
        <ProjectsSection />
      </div>
      <TeachingSection />
      <div className="bg-surface-soft">
        <BlogPreviewSection />
      </div>
      <SiteFooter attached />
    </div>
  )
}

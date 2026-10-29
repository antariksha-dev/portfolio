import { profile } from '@/data/profile'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'

export default function BioSection() {
  return (
    <section id="bio" className="py-10">
      <Container>
        <SectionHeading id="bio-heading">bio</SectionHeading>
        <p className="mt-4 leading-relaxed text-text">{profile.bio}</p>
      </Container>
    </section>
  )
}

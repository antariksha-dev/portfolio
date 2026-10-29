import { teaching } from '@/data/teaching'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import TeachingCard from '@/components/home/TeachingCard'

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-10">
      <Container>
        <SectionHeading id="teaching-heading">teaching</SectionHeading>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teaching.map((item) => (
            <TeachingCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

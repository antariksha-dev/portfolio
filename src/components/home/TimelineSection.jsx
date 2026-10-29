import { timeline } from '@/data/timeline'
import Container from '@/components/layout/Container'
import TimelineItem from '@/components/home/TimelineItem'

export default function TimelineSection() {
  return (
    <section id="timeline" className="pb-10">
      <Container>
        <h2 className="sr-only">Timeline</h2>
        <ul>
          {timeline.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

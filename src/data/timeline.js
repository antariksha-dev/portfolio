import { experience } from '@/data/experience'
import { education } from '@/data/education'

function toTimelineItem(item, { title, subtitle }) {
  return {
    id: item.id,
    title,
    url: item.url ?? null,
    subtitle,
    logo: item.logo,
    startDate: item.startDate,
    endDate: item.endDate,
    description: item.description,
  }
}

const normalizedExperience = experience.map((item) =>
  toTimelineItem(item, { title: item.company, subtitle: item.role }),
)

const normalizedEducation = education.map((item) =>
  toTimelineItem(item, { title: item.institution, subtitle: item.degree }),
)

export const timeline = [...normalizedExperience, ...normalizedEducation]

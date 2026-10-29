import { formatMonthYear } from '@/lib/dates'

function dateLabel(item) {
  const start = item.startDate ? formatMonthYear(item.startDate) : null
  const end = item.endDate ? formatMonthYear(item.endDate) : null
  if (!start) return end
  if (!end) return `${start} –`
  return `${start} – ${end}`
}

export default function TimelineItem({ item }) {
  return (
    <li className="group flex">
      <div className="w-36 shrink-0 whitespace-nowrap pb-6 pr-3 pt-0.5 text-right text-xs text-text/70 group-last:pb-0">
        {dateLabel(item)}
      </div>
      <div className="relative ml-3 shrink-0 border-l-2 border-timeline pb-6 pl-3 group-last:pb-0">
        <span
          className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full border-2 border-bg bg-timeline"
          aria-hidden="true"
        />
        <img
          src={item.logo}
          alt={`${item.title} logo`}
          className="h-11 w-11 rounded-md bg-white object-contain p-1.5 ring-1 ring-border"
        />
      </div>
      <div className="min-w-0 flex-1 pb-6 pl-4 group-last:pb-0">
        <h3 className="font-medium text-heading">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="text-sm text-text">{item.subtitle}</p>
        {item.description ? (
          <p className="mt-2 text-sm leading-relaxed text-text">{item.description}</p>
        ) : null}
      </div>
    </li>
  )
}

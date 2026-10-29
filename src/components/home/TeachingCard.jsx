import PlayIcon from '@/components/icons/PlayIcon'

export default function TeachingCard({ item }) {
  return (
    <a
      href={item.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.title} (opens in new tab)`}
      title={item.isPlaceholder ? `${item.title} — placeholder link` : item.title}
      className="flex flex-col gap-3 rounded-lg border border-border bg-bg p-5 transition-colors hover:border-accent"
    >
      <PlayIcon className="h-7 w-7 text-text" />
      <div>
        <h3 className="font-medium text-heading">{item.title}</h3>
        <p className="mt-1 text-sm text-text">{item.description}</p>
      </div>
    </a>
  )
}

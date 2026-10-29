import GitHubIcon from '@/components/icons/GitHubIcon'

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} on GitHub (opens in new tab)`}
      title={project.isPlaceholder ? `${project.name} — placeholder link` : project.name}
      className="flex flex-col gap-3 rounded-lg border border-border bg-bg p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-mono text-sm font-medium text-heading">{project.name}</h3>
        <GitHubIcon className="h-4 w-4 shrink-0 text-text" />
      </div>
      <p className="text-sm leading-relaxed text-text">{project.description}</p>
    </a>
  )
}

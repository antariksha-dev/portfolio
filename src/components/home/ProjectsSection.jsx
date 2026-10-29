import { projects } from '@/data/projects'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import ProjectCard from '@/components/home/ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10">
      <Container>
        <SectionHeading id="projects-heading">projects</SectionHeading>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}

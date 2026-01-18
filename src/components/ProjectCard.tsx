import type { ArchitectureProject } from '../types/project'

interface ProjectCardProps {
  project: ArchitectureProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon


  return (
    <div className="group relative overflow-hidden border border-border bg-card shadow-sm transition-all hover:shadow-lg">
      <div
        className="aspect-square flex items-center justify-center bg-white"
      >
        <Icon
          size={64}
          className="text-gray-800"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-card-foreground">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 text-xs mb-2">
          <span className="px-2 py-1 bg-secondary text-secondary-foreground">
            {project.authors}
          </span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground">
            {project.typology}
          </span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground">
            {project.year}
          </span>
        </div>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/20 text-primary border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

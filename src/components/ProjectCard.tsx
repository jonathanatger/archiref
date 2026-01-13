import type { ArchitectureProject } from '../types/project'

interface ProjectCardProps {
  project: ArchitectureProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon
  const colorMap: Record<string, string> = {
    Bleu: 'bg-blue-500',
    Rouge: 'bg-red-500',
    Vert: 'bg-green-500',
    Jaune: 'bg-yellow-500',
    Gris: 'bg-gray-500',
    Blanc: 'bg-white border-2 border-gray-300',
    Noir: 'bg-gray-900',
  }

  return (
    <div className="group relative overflow-hidden border border-border bg-card shadow-sm transition-all hover:shadow-lg">
      <div
        className={`aspect-square flex items-center justify-center ${colorMap[project.color] || 'bg-gray-200'}`}
      >
        <Icon
          size={64}
          className={
            project.color === 'Blanc' || project.color === 'Jaune'
              ? 'text-gray-800'
              : 'text-white'
          }
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
            {project.theme}
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

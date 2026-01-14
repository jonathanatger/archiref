import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ThemeSelector from '../components/ThemeSelector'
import type { ThemeQuality } from '../types/project'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [selectedQualities, setSelectedQualities] = useState<Set<ThemeQuality>>(
    new Set(),
  )

  const handleQualityToggle = (quality: ThemeQuality) => {
    setSelectedQualities((prev) => {
      const next = new Set(prev)
      if (next.has(quality)) {
        next.delete(quality)
      } else {
        next.add(quality)
      }
      return next
    })
  }

  // Filter projects based on selected theme qualities
  const filteredProjects = useMemo(() => {
    if (selectedQualities.size === 0) {
      return projects
    }
    return projects.filter((project) => {
      // Project must have at least one of the selected qualities
      return project.tags.some((tag) => selectedQualities.has(tag))
    })
  }, [selectedQualities])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            Projets d'Architecture
          </h1>
          <p className="text-muted-foreground">
            Sélectionnez les thèmes pour filtrer les projets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - Theme selection */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ThemeSelector
                selectedQualities={selectedQualities}
                onQualityToggle={handleQualityToggle}
              />
            </div>
          </div>

          {/* Right side - Projects display */}
          <div className="lg:col-span-2">
            <div className="mb-4 text-sm text-muted-foreground">
              {selectedQualities.size > 0 ? (
                <>
                  Affichage de {filteredProjects.length} projet
                  {filteredProjects.length !== 1 ? 's' : ''} sur{' '}
                  {projects.length}
                </>
              ) : (
                <>Tous les projets ({projects.length})</>
              )}
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Aucun projet ne correspond aux thèmes sélectionnés.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Essayez de sélectionner d'autres thèmes.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

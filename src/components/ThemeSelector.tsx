import { themes } from '../data/themes'
import type { ThemeQuality } from '../types/project'

interface ThemeSelectorProps {
  selectedQualities: Set<ThemeQuality>
  onQualityToggle: (quality: ThemeQuality) => void
}

export default function ThemeSelector({
  selectedQualities,
  onQualityToggle,
}: ThemeSelectorProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Sélectionner les thèmes</h2>
      {Object.entries(themes).map(([category, qualities]) => (
        <div key={category} className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">{category}</h3>
          <div className="space-y-2">
            {qualities.map((quality) => {
              const isSelected = selectedQualities.has(quality)
              return (
                <label
                  key={quality}
                  className={`flex items-center gap-3 p-3 border border-border bg-card cursor-pointer transition-colors hover:bg-secondary ${
                    isSelected ? 'bg-secondary border-primary' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onQualityToggle(quality)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="text-foreground">{quality}</span>
                </label>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}


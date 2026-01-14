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
      <h2 className="text-2xl font-bold text-foreground"> Thèmes</h2>
      <div className="space-y-2">
        {themes.map((theme) => {
          const isSelected = selectedQualities.has(theme)
          return (
            <label
              key={theme}
              className={`flex items-center gap-3 p-3 border border-border bg-card cursor-pointer transition-colors hover:bg-secondary ${
                isSelected ? 'bg-secondary border-primary' : ''
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onQualityToggle(theme)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-foreground">{theme}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}


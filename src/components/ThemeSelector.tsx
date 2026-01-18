import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
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
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const selectedCount = selectedQualities.size
  const selectedText =
    selectedCount === 0
      ? 'Sélectionner des thèmes'
      : selectedCount === 1
        ? '1 thème sélectionné'
        : `${selectedCount} thèmes sélectionnés`

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground"> Thèmes</h2>

      {/* Mobile: Dropdown */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex w-full items-center justify-between gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
        >
          <span>{selectedText}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isMobileOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isMobileOpen && (
          <div className="mt-2 space-y-2 rounded-md border border-border bg-card p-2">
            {themes.map((theme) => {
              const isSelected = selectedQualities.has(theme)
              return (
                <label
                  key={theme}
                  className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors hover:bg-secondary ${
                    isSelected ? 'bg-secondary' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onQualityToggle(theme)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="text-foreground text-sm">{theme}</span>
                </label>
              )
            })}
          </div>
        )}
      </div>

      {/* Desktop: Checkbox list */}
      <div className="hidden space-y-2 lg:block">
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


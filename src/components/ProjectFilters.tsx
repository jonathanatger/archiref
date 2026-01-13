import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import type { Color, Theme, Typology } from '../types/project'

interface ProjectFiltersProps {
  themes: Array<Theme>
  typologies: Array<Typology>
  colors: Array<Color>
  selectedTheme: Theme | null
  selectedTypology: Typology | null
  selectedColor: Color | null
  onThemeChange: (theme: Theme | null) => void
  onTypologyChange: (typology: Typology | null) => void
  onColorChange: (color: Color | null) => void
}

export default function ProjectFilters({
  themes,
  typologies,
  colors,
  selectedTheme,
  selectedTypology,
  selectedColor,
  onThemeChange,
  onTypologyChange,
  onColorChange,
}: ProjectFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasActiveFilters = selectedTheme || selectedTypology || selectedColor

  const clearAllFilters = () => {
    onThemeChange(null)
    onTypologyChange(null)
    onColorChange(null)
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <Filter size={18} />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="ml-1 px-2 py-0.5 text-xs bg-primary text-primary-foreground">
              {
                [selectedTheme, selectedTypology, selectedColor].filter(Boolean)
                  .length
              }
            </span>
          )}
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
            Clear all
          </button>
        )}
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-border bg-card">
          <div>
            <label className="block text-sm font-medium mb-2 text-card-foreground">
              Theme
            </label>
            <select
              value={selectedTheme || ''}
              onChange={(e) => onThemeChange((e.target.value as Theme) || null)}
              className="w-full px-3 py-2 border border-input bg-background text-foreground"
            >
              <option value="">All themes</option>
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-card-foreground">
              Typology
            </label>
            <select
              value={selectedTypology || ''}
              onChange={(e) =>
                onTypologyChange((e.target.value as Typology) || null)
              }
              className="w-full px-3 py-2 border border-input bg-background text-foreground"
            >
              <option value="">All typologies</option>
              {typologies.map((typology) => (
                <option key={typology} value={typology}>
                  {typology}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-card-foreground">
              Color
            </label>
            <select
              value={selectedColor || ''}
              onChange={(e) => onColorChange((e.target.value as Color) || null)}
              className="w-full px-3 py-2 border border-input bg-background text-foreground"
            >
              <option value="">All colors</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

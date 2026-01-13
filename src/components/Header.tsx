import { Building2, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/use-theme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Building2 size={28} className="text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Archiref</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-secondary transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun size={20} className="text-foreground" />
          ) : (
            <Moon size={20} className="text-foreground" />
          )}
        </button>
      </div>
    </header>
  )
}

import type { LucideIcon } from 'lucide-react'
import type { themes } from '../data/themes'

export type Typology =
  | 'Maison'
  | 'Appartement'
  | 'Bureau'
  | 'Musée'
  | 'École'
  | 'Hôpital'
  | 'Mixte'

export type ThemeQuality = (typeof themes)[number]

export interface ArchitectureProject {
  id: string
  name: string
  authors: string
  typology: [Typology]
  icon: LucideIcon
  description: string
  year: number
  tags: Array<ThemeQuality>
}

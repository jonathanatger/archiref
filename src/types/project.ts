import type { LucideIcon } from 'lucide-react'
import type { themes } from '../data/themes'

export type Theme =
  | 'Résidentiel'
  | 'Commercial'
  | 'Culturel'
  | 'Éducatif'
  | 'Santé'
export type Typology =
  | 'Maison'
  | 'Appartement'
  | 'Bureau'
  | 'Musée'
  | 'École'
  | 'Hôpital'
  | 'Mixte'
export type Color =
  | 'Bleu'
  | 'Rouge'
  | 'Vert'
  | 'Jaune'
  | 'Gris'
  | 'Blanc'
  | 'Noir'

export type ThemeCategory = keyof typeof themes
export type ThemeQuality =
  | 'Structure'
  | 'Réseaux'
  | 'Exposer'
  | 'Tempérer'
  | 'Matériaux bruts'
  | 'Couleur'

export interface ArchitectureProject {
  id: string
  name: string
  theme: Theme
  typology: Typology
  color: Color
  icon: LucideIcon
  description: string
  year: number
  tags: Array<ThemeQuality>
}

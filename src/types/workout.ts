//  Информация о пройденных километрах

export interface Workout {
  id: string
  date: string
  distance: string
}

export interface Workouts {
  workouts: Workout[]
}

export type SortOrder = 'asc' | 'desc'

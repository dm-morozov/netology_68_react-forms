// src/types/workout.ts

//  Информация о пройденных километрах
export interface Workout {
  id: string
  date: string
  distance: number
}

export interface Workouts {
  workouts: Workout[]
}

export type SortOrder = 'asc' | 'desc'

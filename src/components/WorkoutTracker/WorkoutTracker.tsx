import type React from 'react'
import WorkoutForm from './WorkoutForm'
import styles from './WorkoutTracker.module.css'
import type { Workout } from '../../types/workout'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import WorkoutTable from './WorkoutTable'

// Начальные данные (изменим формат даты на тот, что дает input type="date")
const initialWorkouts: Workout[] = [
  { id: uuidv4(), date: '2025-10-16', distance: 5.7 },
  { id: uuidv4(), date: '2025-10-15', distance: 14.2 },
  { id: uuidv4(), date: '2025-10-14', distance: 2.0 },
]

/**
 * Компонент для отображения трекера тренировок.
 * Содержит форму для добавления/редактирования тренировок.
 *
 * @returns {JSX.Element} - JSX-элемент, представляющий трекер тренировок.
 */
const WorkoutTracker: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts)

  const sortByDateDesk = (arr: Workout[]): Workout[] => {
    return [...arr].sort(
      // Сортировка по убыванию (от новой к старой)
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }

  let updatedWorkouts: Workout[]

  const handleAddOrUpdateWorkout = (NewEntry: Omit<Workout, 'id'>) => {
    // Ищем существующую запись с такой же датой
    // возвращает индекс первого совпадения или -1
    const existingIndex = workouts.findIndex(
      (workout) => workout.date === NewEntry.date
    )

    // если запись существует
    if (existingIndex !== -1) {
      // Обновляем существующую запись
      const existingWorkout = workouts[existingIndex]

      // Сумируем старое и новое расстояние
      const newDistance = existingWorkout.distance + NewEntry.distance

      updatedWorkouts = workouts.map((workout, index) =>
        index === existingIndex
          ? { ...workout, distance: parseFloat(newDistance.toFixed(1)) }
          : workout
      )
    } else {
      // нам нужно добавить id и поработать с округлением
      const newWorkout: Workout = {
        ...NewEntry,
        id: uuidv4(),
        distance: parseFloat(NewEntry.distance.toFixed(1)),
      }

      //   ну и конечно создаем новый массив с новой записью
      updatedWorkouts = [...workouts, newWorkout]
    }

    // Создаем новую запись и новый массив
    // const newWorkoutEntry: Workout = { ...NewEntry, id: uuidv4() }
    // const updatedWorkouts: Workout[] = [...workouts, newWorkoutEntry]

    // СОРТИРОВКА и Обновление состояния
    const sortedWorkouts = sortByDateDesk(updatedWorkouts)

    // console.log('--- Трекер: Итоговое новое состояние ---')
    // console.log(sortedWorkouts)

    setWorkouts(sortedWorkouts)
  }

  const handleDelete = (idToDelete: string) => {
    // console.log(`--- Трекер: Удаляю запись с ID: ${idToDelete} ---`)
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== idToDelete
    )

    setWorkouts(updatedWorkouts)
  }

  return (
    <div className={styles.trackerContainer ? styles.trackerContainer : ''}>
      <h2 className="h2-title">Трекер тренировок</h2>
      {/* Передаем обработчик в форму */}
      <WorkoutForm onAddOrUpdateWorkout={handleAddOrUpdateWorkout} />

      <WorkoutTable workouts={workouts} onDelete={handleDelete} />
    </div>
  )
}

export default WorkoutTracker

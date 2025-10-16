import type React from 'react'
import WorkoutForm from './WorkoutForm'
import styles from './WorkoutTracker.module.css'
import type { Workout } from '../../types/workout'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

// Начальные данные (изменим формат даты на тот, что дает input type="date")
const initialWorkouts: Workout[] = [
  { id: uuidv4(), date: '2023-07-20', distance: 5.7 },
  { id: uuidv4(), date: '2023-07-19', distance: 14.2 },
  { id: uuidv4(), date: '2023-07-18', distance: 2.0 },
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
      // b.date - a.date дает сортировку по убыванию (самая новая дата сверху)
      (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate()
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

    console.log('--- Трекер: Итоговое новое состояние ---')
    console.log(sortedWorkouts)

    setWorkouts(sortedWorkouts)
  }

  return (
    <div className={styles.trackerContainer ? styles.trackerContainer : ''}>
      <h2 className="h2-title">Трекер тренировок</h2>
      {/* Передаем обработчик в форму */}
      <WorkoutForm onAddOrUpdateWorkout={handleAddOrUpdateWorkout} />
    </div>
  )
}

export default WorkoutTracker

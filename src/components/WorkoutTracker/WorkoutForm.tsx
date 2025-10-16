// src/components/WorkoutTracker/WorkoutForm.tsx
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import styles from './WorkoutTracker.module.css'
import type { WorkoutFormProps } from '../../types/workout'

const WorkoutForm: FC<WorkoutFormProps> = ({ onAddOrUpdateWorkout }) => {
  // Создадим состояния для каждого поля ввода
  const [date, setDate] = useState('')
  const [distance, setDistance] = useState('')

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const handleDistanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDistance(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('--- WorkoutForm: Данные отправлены ---')
    console.log('Дата:', date)
    console.log('Дистанция:', distance)

    // Передаем данные в родительский компонент
    onAddOrUpdateWorkout({ date, distance: parseFloat(distance) })

    // Очистим поля ввода
    setDate('')
    setDistance('')
  }

  return (
    <form className={styles.workoutForm} onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={date}
        placeholder="Дата (ДД.ММ.ГГГГ)"
        className={styles.workoutInput + ' ' + styles.dateInput}
        // При изменении обновляем состояние даты
        onChange={handleDateChange}
        required
      />
      <input
        type="number"
        name="distance"
        value={distance}
        className={styles.workoutInput + ' ' + styles.distanceInput}
        placeholder="Дистанция (км)"
        // При изменении обновляем состояние дистанции
        onChange={handleDistanceChange}
        required
      />
      <button type="submit">OK</button>
    </form>
  )
}

export default WorkoutForm

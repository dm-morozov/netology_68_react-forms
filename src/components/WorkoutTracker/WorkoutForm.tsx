// src/components/WorkoutTracker/WorkoutForm.tsx
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import styles from './WorkoutTracker.module.css'

const WorkoutForm: FC = () => {
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

    // Очистим поля ввода
    setDate('')
    setDistance('')
  }

  return (
    <form className={styles.workoutForm} onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        placeholder="Дата (ДД.ММ.ГГГГ)"
        className={styles.workoutInput}
        // При изменении обновляем состояние даты
        onChange={handleDateChange}
        required
      />
      <input
        type="number"
        value={distance}
        className={styles.workoutInput}
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

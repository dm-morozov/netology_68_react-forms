import type { FC } from 'react'
import type { Workout, WorkoutTableProps } from '../../types/workout'
import styles from './WorkoutTracker.module.css'

const WorkoutTable: FC<WorkoutTableProps> = ({ workouts, onDelete }) => {
  if (workouts.length === 0) {
    return <p>Нет данных о тренировках. Добавьте первую запись.</p>
  }

  return (
    <table className={styles.workoutTable}>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Дистанция (км)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout: Workout) => (
          <tr key={workout.id} className={styles.tableRow}>
            <td>{workout.date}</td>
            <td>{workout.distance}</td>
            <td className={styles.actionsCell}>
              <button
                className={styles.deleteButton}
                onClick={() => onDelete(workout.id)}
              >
                ✘
              </button>
              {/* Необязательная кнопка редактирования 
              <button className={styles.editButton}>✎</button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WorkoutTable

import type { JSX } from 'react'
import './App.css'
import ColorConverter from './components/ColorConverter/ColorConverter'
import WorkoutForm from './components/WorkoutTracker/WorkoutForm'
// import FeedbackState from './components/classwork/FeedbackState'
// import FileChooser from './components/classwork/FileChooser'
// import FileChooserClass from './components/classwork/FileChooserClass'

function App(): JSX.Element {
  // return <Feedback />
  return (
    <>
      {/* <FeedbackState />
      <FileChooser />
      <FileChooserClass /> */}
      <h1>Работа с формами</h1>
      <div className="container">
        <h2 className="h2-title">Конвертер цвета</h2>
        <ColorConverter />
      </div>
      <div className="container">
        <h2 className="h2-title">Трекер тренировок</h2>
        <WorkoutForm />
      </div>
    </>
  )
}

export default App

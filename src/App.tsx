import type { JSX } from 'react'
import './App.css'
import ColorConverter from './components/ColorConverter/ColorConverter'
import WorkoutTracker from './components/WorkoutTracker/WorkoutTracker'
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
        <WorkoutTracker />
      </div>
    </>
  )
}

export default App

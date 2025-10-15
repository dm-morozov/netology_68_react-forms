import type { JSX } from 'react'
import './App.css'
import ColorConverter from './components/ColorConverter/ColorConverter'
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
    </>
  )
}

export default App

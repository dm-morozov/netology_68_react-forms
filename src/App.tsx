// import Feedback from './components/classwork/Feedback'
import type { JSX } from 'react'
import './App.css'
import FeedbackState from './components/classwork/FeedbackState'
import FileChooser from './components/classwork/FileChooser'
import FileChooserClass from './components/classwork/FileChooserClass'

function App(): JSX.Element {
  // return <Feedback />
  return (
    <>
      <FeedbackState />
      <FileChooser />
      <FileChooserClass />
    </>
  )
}

export default App

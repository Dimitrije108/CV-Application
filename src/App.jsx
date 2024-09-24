import { useState } from 'react'
import './styles/App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'

// TO UPDATE CV IN REAL TIME:
// Lift the state up to the parent component so that both the input field and the display 
// component can share the same piece of state.
// Handle the input changes in the parent and pass both the value and the onChange event 
// handler as props to the child components (the input and the display area).

// A4 Format size: 794 x 1123

function App() {
  // manage some state?

  // Use state to show and hide different cv maker sections
  // Only one can be opet at a time

  return (
    <>
      <div>
        <PersonalDetails/>
        <Education/>
        <WorkHistory/>
        <Skills/>
      </div>
      
    </>
  )
}

export default App

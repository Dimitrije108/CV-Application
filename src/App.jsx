import { useState } from 'react'
import './styles/App.css'

import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import CVDisplay from './components/CVDisplay'

import { initPersonalInfo } from './components/initData'

// TO UPDATE CV IN REAL TIME:
// Lift the state up to the parent component so that both the input field and the display 
// component can share the same piece of state.
// Handle the input changes in the parent and pass both the value and the onChange event 
// handler as props to the child components (the input and the display area).

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(initPersonalInfo);

  function handlePersonalInfo(e, name) {
    setPersonalInfo({
      ...personalInfo,
      [name]: e.target.value,
    })
  }

  // Use state to show and hide different cv maker sections
  // Only one can be opet at a time
  return (
    <>
      <div>
        <PersonalDetails 
          data={personalInfo}
          handleChange={handlePersonalInfo}
        />
        <Education/>
        <WorkHistory/>
        <Skills/>
      </div>
      <CVDisplay
        personalData={personalInfo}
      />
    </>
  )
}

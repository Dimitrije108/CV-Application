import { useState } from 'react'
import './styles/App.css'

import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import CVDisplay from './components/CVDisplay'

import { initPersonalDetails } from './components/initData'

export default function App() {
  const [personalDetails, setPersonalDetails] = useState(initPersonalDetails);
  const [activeInputSection, setActiveInputSection] = useState(0);

  function handlePersonalDetails(e, name) {
    setPersonalDetails({
      ...personalDetails,
      [name]: e.target.value,
    })
  }

  return (
    <>
      <section className="cv-input-sections">
        <InputSection
          className="personal-details"
          sectionName="Personal Details"
          isActive={activeInputSection === 0}
          onShow={() => setActiveInputSection(0)}
        >
          <PersonalDetails
            data={personalDetails}
            handleChange={handlePersonalDetails}
          />
        </InputSection>
        <InputSection
          className="education"
          sectionName="Education"
          isActive={activeInputSection === 1}
          onShow={() => setActiveInputSection(1)}
        >
          <Education/>
        </InputSection>
        <InputSection
          className="work-history"
          sectionName="Work History"
          isActive={activeInputSection === 2}
          onShow={() => setActiveInputSection(2)}
        >
          <WorkHistory/>
        </InputSection>
        <InputSection
          className="skills"
          sectionName="Skills"
          isActive={activeInputSection === 3}
          onShow={() => setActiveInputSection(3)}
        >
          <Skills/>
        </InputSection>
      </section>
      <CVDisplay
        personalData={personalDetails}
      />
    </>
  )
}
// Display the input section if it is expanded, otherwise display the button
// to expand the section. No two sections can be expanded at the same time.
function InputSection({ className, children, sectionName, isActive, onShow }) {
  return (
    <section className={className}>
			<fieldset className={isActive ? "" : "inactive"}>
				<h2>{sectionName}</h2>
        {isActive ? (
          children
        ) : (
          <button onClick={onShow}>
            <img src="/src/assets/plus-icon.svg" alt="" width="30px" height="30px" />
          </button>
        )}
			</fieldset>
		</section>
  )
}

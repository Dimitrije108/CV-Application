import { useState } from 'react'
import './styles/App.css'

import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import EducationList from './components/EducationList'
import WorkHistory from './components/WorkHistory'
import WorkHistoryList from './components/WorkHistoryList'
import Skills from './components/Skills'
import SkillsList from './components/SkillsList'
import CVDisplay from './components/CVDisplay'

import { 
  initPersonalDetails,
  initEducation,
  initEducationList,
  initWorkHistory,
  initWorkHistoryList,
  initSkillList,
} from './components/initData'

export default function App() {
  const [activeInputSection, setActiveInputSection] = useState(0);

  const [personalDetails, setPersonalDetails] = useState(initPersonalDetails);
  const [education, setEducation] = useState(initEducation);
  const [educationList, setEducationList] = useState(initEducationList);
  const [workHistory, setWorkHistory] = useState(initWorkHistory);
  const [workHistoryList, setWorkHistoryList] = useState(initWorkHistoryList);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState(initSkillList);

  function handlePersonalDetails(e, name) {
    setPersonalDetails({
      ...personalDetails,
      [name]: e.target.value,
    })
  }

  function handleEducation(e, name) {
    setEducation({
      ...education,
      [name]: e.target.value,
    })
  }
  // Add ID's so that items can be deleted from the list
  // Also: reset education state back to "" after submitting it to the list
  function handleEducationList() {
    const newEntry = { ...education, id: crypto.randomUUID() }
    setEducationList([
      ...educationList,
      newEntry,
    ])
    setEducation(initEducation)
  }

  function handleWorkHistory(e, name) {
    setWorkHistory({
      ...workHistory,
      [name]: e.target.value,
    })
  }
  // Add ID's so that items can be deleted from the list
  // Also: reset education state back to "" after submitting it to the list
  function handleWorkHistoryList() {
    const newEntry = { ...workHistory, id: crypto.randomUUID() }
    setWorkHistoryList([
      ...workHistoryList,
      newEntry,
    ])
    setWorkHistory(initWorkHistory)
  }

  function handleSkill(e) {
    setSkill(e.target.value)
  }
  // Add ID's so that items can be deleted from the list
  // Also: reset education state back to "" after submitting it to the list
  function handleSkillList() {
    const newEntry = { skill: skill, id: crypto.randomUUID() }
    setSkillList([
      ...skillList,
      newEntry,
    ])
    setSkill("")
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
          <Education
            data={education}
            handleChange={handleEducation}
            handleSubmit={handleEducationList}
          />
          <EducationList
            data={educationList}
          />
        </InputSection>
        <InputSection
          className="work-history"
          sectionName="Work History"
          isActive={activeInputSection === 2}
          onShow={() => setActiveInputSection(2)}
        >
          <WorkHistory
            data={workHistory}
            handleChange={handleWorkHistory}
            handleSubmit={handleWorkHistoryList}
          />
          <WorkHistoryList
            data={workHistoryList}
          />
        </InputSection>
        <InputSection
          className="skills"
          sectionName="Skills"
          isActive={activeInputSection === 3}
          onShow={() => setActiveInputSection(3)}
        >
          <Skills
            data={skill}
            handleChange={handleSkill}
            handleSubmit={handleSkillList}
          />
          <SkillsList
            data={skillList}
          />
        </InputSection>
      </section>
      <CVDisplay
        personalData={personalDetails}
        educationList={educationList}
        workHistoryList={workHistoryList}
        skillList={skillList}
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

import { useState } from 'react'
import './styles/App.css'
import plusIcon from '/src/assets/plus-icon.svg';

import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
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
  // all input section states
  const [personalDetails, setPersonalDetails] = useState(initPersonalDetails);
  const [education, setEducation] = useState(initEducation);
  const [educationList, setEducationList] = useState(initEducationList);
  const [workHistory, setWorkHistory] = useState(initWorkHistory);
  const [workHistoryList, setWorkHistoryList] = useState(initWorkHistoryList);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState(initSkillList);

  return (
    <>
      <section className="cv-input-section">
        <h1>CV Builder</h1>
        <p>Build your CV by filling out different input sections below! You can view your CV while you build it!</p>
        <InputSection
          className="input-section"
          sectionName="Personal Details"
          isActive={activeInputSection === 0}
          onShow={() => setActiveInputSection(0)}
        >
          <PersonalDetails
            data={personalDetails}
            setData={setPersonalDetails}
          />
        </InputSection>
        <InputSection
          className="input-section"
          sectionName="Education"
          isActive={activeInputSection === 1}
          onShow={() => setActiveInputSection(1)}
        >
          <Education
            data={education}
            setData={setEducation}
            list={educationList}
            setList={setEducationList}
          />
        </InputSection>
        <InputSection
          className="input-section"
          sectionName="Work History"
          isActive={activeInputSection === 2}
          onShow={() => setActiveInputSection(2)}
        >
          <WorkHistory
            data={workHistory}
            setData={setWorkHistory}
            list={workHistoryList}
            setList={setWorkHistoryList}
          />
        </InputSection>
        <InputSection
          className="input-section"
          sectionName="Skills"
          isActive={activeInputSection === 3}
          onShow={() => setActiveInputSection(3)}
        >
          <Skills
            data={skill}
            setData={setSkill}
            list={skillList}
            setList={setSkillList}
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
            <img src={plusIcon} alt="" width="30px" height="30px" />
          </button>
        )}
			</fieldset>
		</section>
  )
}

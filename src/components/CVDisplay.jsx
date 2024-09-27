import '../styles/CVDisplay.css'

export default function CVDisplay({ 
	personalData, 
	educationList, 
	workHistoryList, 
	skillList 
}) {
	return (
		<section className="cv-display">
			<CVPersonalDetails
				data={personalData}
			/>
			<CVEducation
				educationList={educationList}
			/>
			<CVWorkHistory
				workHistoryList={workHistoryList}
			/>
			<CVSkills
				skillList={skillList}
			/>
		</section>
	)
}

function CVPersonalDetails({ data }) {
	return (
		<div className="cv-personal-details">
			<div className="full-name">
				{data.firstName || "Nikola"}{' '}{data.lastName || "Jokić"}
			</div>
			<div className="job-title">
				{data.jobTitle || "Horse racer"}
			</div>
			<div className="contact-info">
				{data.email || "somborshuffle15@example.com"}
				{data.phone || "065/555-333"}
				{data.city || "Sombor"}
				{data.country || "Serbia"}
			</div>
		</div>
	)
}

function CVEducation({ educationList }) {
	return (
		<div className="cv-education">
			{educationList.map((item) => (
				<div key={item.id}>
					<h3>{item.degree}</h3>
					<p>{item.school}</p>
					<p>{item.city}</p>
					<div className="education-dates-cont">
						<div>{item.startDate}</div>
						<div>{item.endDate}</div>
					</div>
				</div>
			))}
		</div>
	)
}

function CVWorkHistory({ workHistoryList }) {
	return (
		<div className="cv-work-history">
			{workHistoryList.map((item) => (
				<div key={item.id}>
					<h3>{item.jobTitle}</h3>
					<p>{item.company}</p>
					<p>{item.location}</p>
					<div className="education-dates-cont">
						<div>{item.startDate}</div>
						<div>{item.endDate}</div>
					</div>
					<p>{item.jobDescription}</p>
				</div>
			))}
		</div>
	)
}

function CVSkills({ skillList }) {
	return (
		<div className="cv-skills">
			{skillList.map((item) => (
				<div key={item.id}>{item.skill}</div>
			))}
		</div>
	)
}
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
			<div className="cv-position-cont">
				<CVEducation
					educationList={educationList}
				/>
				<CVWorkHistory
					workHistoryList={workHistoryList}
				/>
				<CVSkills
					skillList={skillList}
				/>
			</div>
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
			<div className="personal-info">
				<div className="contact-info">
					<p>{data.email || "somborshuffle15@example.com"}</p>
					<p>{data.phone || "065/555-333"}</p>
					<p>{data.city || "Sombor"}, {data.country || "Serbia"}</p>
				</div>
			</div>
		</div>
	)
}

function CVEducation({ educationList }) {
	return (
		<div className="cv-education">
			<h2 className="cv-section-header">Education</h2>
			{educationList.map((item) => (
				<div key={item.id} className="cv-cont-item">
					<h3>{item.degree}</h3>
					<p>{item.school}</p>
					<p>{item.city}</p>
					<div className="cv-date-cont">
						<div>Start date: {item.startDate}</div>
						<div>End date: {item.endDate}</div>
					</div>
				</div>
			))}
		</div>
	)
}

function CVWorkHistory({ workHistoryList }) {
	return (
		<div className="cv-work-history">
			<h2 className="cv-section-header">Work History</h2>
			{workHistoryList.map((item) => (
				<div key={item.id} className="cv-cont-item">
					<h3>{item.jobTitle}</h3>
					<p>{item.company}</p>
					<p>{item.location}</p>
					<div className="cv-date-cont">
						<div>Start date: {item.startDate}</div>
						<div>End date: {item.endDate}</div>
					</div>
					<div className="job-desc-cont">
						<p>{item.jobDescription}</p>
					</div>
				</div>
			))}
		</div>
	)
}

function CVSkills({ skillList }) {
	return (
		<div className="cv-skills">
			<h2 className="cv-section-header">Skills</h2>
			<div className="cv-skills-cont">
				{skillList.map((item) => (
					<div key={item.id}>{item.skill}</div>
				))}
			</div>
		</div>
	)
}
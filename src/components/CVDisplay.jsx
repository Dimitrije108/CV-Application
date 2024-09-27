import '../styles/CVDisplay.css'

export default function CVDisplay({ personalData, educationList, workHistoryList, skillList }) {
	return (
		<section className="cv-display">
			<div className="cv-personal-details">
				<div className="full-name">
					{personalData.firstName || "Nikola"}{' '}{personalData.lastName || "Jokić"}
				</div>
				<div className="job-title">
					{personalData.jobTitle || "Horse racer"}
				</div>
				<div className="contact-info">
					{personalData.email || "somborshuffle15@example.com"}
					{personalData.phone || "065/555-333"}
					{personalData.city || "Sombor"}
					{personalData.country || "Serbia"}
				</div>
			</div>
			<div className="cv-education">
				{educationList.map((item) => (
					<div>
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
			<div className="cv-work-history">
				{workHistoryList.map((item) => (
					<div>
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
			<div className="cv-skills">
				{skillList.map((skill) => (
						<p>{skill}</p>
					))}
			</div>
		</section>
	)
}

function CVEducation() {
	return (
		<>
			{Degree}
			{School}
			{startDate}
			{endDate}
			{City}
		</>
	)
}

function CVWorkHistory() {
	return (
		<>
			{jobTitle}
			{company}
			{location}
			{startDate}
			{endDate}
			{jobDescription}
		</>
	)
}

function CVSkills() {
	return (
		<>
			{skill}
		</>
	)
}
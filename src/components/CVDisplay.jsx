import '../styles/CVDisplay.css'

export default function CVDisplay({ personalData }) {
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
			{/* <div className="cv-education">
				<CVEducation />
			</div>
			<div className="cv-work-history">
				<CVEWorkHistory />
			</div>
			<div className="cv-skills">
				<CVSkills />
			</div> */}
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
export default function EducationList({ data }) {
	return (
		<>
			{data.map((obj) => (
				<div key={obj.id}>
					<h3>{obj.degree}</h3>
					<p>{obj.school}</p>
					<p>{obj.city}</p>
					<div className="education-dates-cont">
						<div>{obj.startDate}</div>
						<div>{obj.endDate}</div>
					</div>
				</div>
			))}
		</>
	)
}
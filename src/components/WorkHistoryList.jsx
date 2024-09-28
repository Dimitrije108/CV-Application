export default function WorkHistoryList({ data, handleDel }) {
	return (
		<>
			{data.map((obj) => (
				<div key={obj.id}>
					<h3>{obj.jobTitle}</h3>
					<p>{obj.company}</p>
					<p>{obj.location}</p>
					<div className="education-dates-cont">
						<div>{obj.startDate}</div>
						<div>{obj.endDate}</div>
					</div>
					<p>{obj.jobDescription}</p>
					<button
						onClick={() => handleDel(obj.id)}
					>X</button>
				</div>
			))}
		</>
	)
}
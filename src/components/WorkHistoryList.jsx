export default function WorkHistoryList({ data, handleEdit, handleDel }) {
	return (
		<>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.jobTitle}</h3>
					<p>{item.company}</p>
					<p>{item.location}</p>
					<div className="education-dates-cont">
						<div>{item.startDate}</div>
						<div>{item.endDate}</div>
					</div>
					<p>{item.jobDescription}</p>
					<button
						onClick={() => handleEdit(item)}
					>Edit</button>
					<button
						onClick={() => handleDel(item.id)}
					>X</button>
				</div>
			))}
		</>
	)
}
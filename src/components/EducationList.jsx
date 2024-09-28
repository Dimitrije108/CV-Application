export default function EducationList({ data, handleEdit, handleDel }) {
	return (
		<>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.degree}</h3>
					<p>{item.school}</p>
					<p>{item.city}</p>
					<div className="education-dates-cont">
						<div>{item.startDate}</div>
						<div>{item.endDate}</div>
					</div>
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
export default function SkillsList({ data, handleDel }) {
	return (
		<>
			{data.map((item) => (
				<div key={item.id}>
					<div>{item.skill}</div>
					<button
						onClick={() => handleDel(item.id)}
					>X</button>
				</div>
			))}
		</>
	)
}
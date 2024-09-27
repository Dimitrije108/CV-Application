export default function SkillsList({ data }) {
	return (
		<>
			{data.map((item) => (
				<div key={item.id}>{item.skill}</div>
			))}
		</>
	)
}
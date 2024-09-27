export default function SkillsList({ data }) {
	return (
		<>
			{data.map((item) => (
				<p>{item}</p>
			))}
		</>
	)
}
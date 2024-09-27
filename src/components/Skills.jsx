import { Input } from './utils'

export default function Skills({ data, handleChange, handleSubmit }) {
	return (
		<div  className="input-cont">
			<Input
				data={data}
				handleChange={handleChange}
			/>
			<button
				className="add-skill-btn"
				type="submit"
				onClick={handleSubmit}
			>
				Add
			</button>
		</div>
	)
}
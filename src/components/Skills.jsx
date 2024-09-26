import { Input } from './utils'

export default function Skills() {
	return (
		<div  className="input-cont">
			<Input/>
			<button
				className="add-skill-btn"
				type="submit"
			>
				Add
			</button>
		</div>
	)
}
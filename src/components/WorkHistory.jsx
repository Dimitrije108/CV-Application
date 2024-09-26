import { Input } from './utils'

export default function WorkHistory() {
	return (
		<div className="input-cont">
			<Input 
				label={"Job title"}
			/>
			<Input 
				label={"Company"}
			/>
			<Input 
				label={"Location"}
			/>
			<Input 
				label={"Start date"}
				type={"month"}
			/>
			<Input 
				label={"End date"}
				type={"month"}
			/>
			<label>
				{"Job description(Optional)"}
			</label>
			<textarea />
			<button
				className="add-work-btn"
				type="submit"
			>
				Add
			</button>
		</div>
	)
}
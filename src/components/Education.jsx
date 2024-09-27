import { Input } from './utils'

export default function Education({ data, handleChange, handleSubmit }) {
	return (
		<div className="input-cont">
			<Input 
				label={"Degree"}
				name={"degree"}
				data={data.degree}
				handleChange={handleChange}
			/>
			<Input 
				label={"School"}
				name={"school"}
				data={data.school}
				handleChange={handleChange}
			/>
			<Input 
				label={"City"}
				name={"city"}
				data={data.city}
				handleChange={handleChange}
			/>
			<Input 
				label={"Start date"}
				name={"startDate"}
				type={"month"}
				data={data.startDate}
				handleChange={handleChange}
			/>
			<Input 
				label={"End date"}
				name={"endDate"}
				type={"month"}
				data={data.endDate}
				handleChange={handleChange}
			/>
			<button
				className="add-education-btn"
				type="submit"
				onClick={handleSubmit}
			>
				Add
			</button>
		</div>
	)
}
// These inputs aren't synced with CV display
// But the button needs to be synced and have a handler that will:
// Show a card below the inputs of your submited education
// And show it on the CV display as well

// So a btn handler will call a component to create a card below the education from
// And it will also call a component to create that info on the CV display
import { Input } from './utils'

export default function Education() {
	return (
		<section className="education">
			<form>
				<fieldset>
					<legend>Education</legend>
					<Input 
						label={"Degree"}
					/>
					<Input 
						label={"School"}
					/>
					<Input 
						label={"Start date"}
						type={"month"}
					/>
					<Input 
						label={"End date"}
						type={"month"}
					/>
					<Input 
						label={"City"}
					/>
					<button
						className="add-education-btn"
						type="submit"
					>
						Add
          </button>
				</fieldset>
			</form>
		</section>
	)
}
// These inputs aren't synced with CV display
// But the button needs to be synced and have a handler that will:
// Show a card below the inputs of your submited education
// And show it on the CV display as well

// So a btn handler will call a component to create a card below the education from
// And it will also call a component to create that info on the CV display
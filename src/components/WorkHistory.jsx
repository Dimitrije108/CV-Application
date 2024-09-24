import { Input } from './utils'

export default function WorkHistory() {
	return (
		<section className="work-history">
			<form>
				<fieldset>
					<legend>Work History</legend>
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
						{' '}
						<textarea />
					</label>
					<button
						className="add-work-btn"
						type="submit"
					>
						Add
          </button>
				</fieldset>
			</form>
		</section>
	)
}
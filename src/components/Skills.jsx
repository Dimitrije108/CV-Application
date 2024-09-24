import { Input } from './utils'

export default function Skills() {
	return (
		<section className="skills">
			<form>
				<fieldset>
					<legend>Skills</legend>
					<Input/>
					<button
						className="add-skill-btn"
						type="submit"
					>
						Add
          </button>
				</fieldset>
			</form>
		</section>
	)
}
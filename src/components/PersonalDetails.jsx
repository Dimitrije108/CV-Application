import { Input } from './utils'

export default function PersonalDetails() {
	return (
		<section className="personal-details">
			<fieldset>
				<legend>Personal Details</legend>
				<Input
					label={"First name"}
				/>
				<Input
					label={"Last name"}
				/>
				<Input
					label={"Job title"}
				/>
				<Input
					label={"Email"}
					type={"email"}
				/>
				<Input
					label={"Phone"}
					type={"tel"}
				/>
				<Input
					label={"Country"}
				/>
				<Input
					label={"City"}
				/>
			</fieldset>
		</section>
	)
}


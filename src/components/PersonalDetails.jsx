import { Input } from './utils'

export default function PersonalDetails({ data, setData }) {

	function handleChange(e, name) {
    setData({
      ...data,
      [name]: e.target.value,
    })
  }
	
	return (
		<div className="input-cont">
			<Input
				label={"First name"}
				name={"firstName"}
				data={data.firstName}
				handleChange={handleChange}
				placeholder={"Nikola"}
			/>
			<Input
				label={"Last name"}
				name={"lastName"}
				data={data.lastName}
				handleChange={handleChange}
				placeholder={"Jokić"}
			/>
			<Input
				label={"Job title"}
				name={"jobTitle"}
				data={data.jobTitle}
				handleChange={handleChange}
				placeholder={"Horse racer"}
			/>
			<Input
				label={"Email"}
				type={"email"}
				name={"email"}
				data={data.email}
				handleChange={handleChange}
				placeholder={"somborshuffle15@example.com"}
			/>
			<Input
				label={"Phone"}
				type={"tel"}
				name={"phone"}
				data={data.phone}
				handleChange={handleChange}
				placeholder={"065/555-333"}
			/>
			<Input
				label={"City"}
				name={"city"}
				data={data.city}
				handleChange={handleChange}
				placeholder={"Sombor"}
			/>
			<Input
				label={"Country"}
				name={"country"}
				data={data.country}
				handleChange={handleChange}
				placeholder={"Serbia"}
			/>
		</div>
	)
}


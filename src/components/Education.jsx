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
				type={"month"}
				name={"startDate"}
				data={data.startDate}
				handleChange={handleChange}
			/>
			<Input 
				label={"End date"}
				type={"month"}
				name={"endDate"}
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

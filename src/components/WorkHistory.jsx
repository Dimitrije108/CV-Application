import { Input } from './utils'

export default function WorkHistory({ data, handleChange, handleSubmit }) {
	return (
		<div className="input-cont">
			<Input 
				label={"Job title"}
				name={"jobTitle"}
				data={data.jobTitle}
				handleChange={handleChange}
			/>
			<Input 
				label={"Company"}
				name={"company"}
				data={data.company}
				handleChange={handleChange}
			/>
			<Input 
				label={"Location"}
				name={"location"}
				data={data.location}
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
			<label>
				{"Job description(Optional)"}
			</label>
			<textarea 
				name={"jobDescription"}
				value={data.jobDescription}
				onChange={(e) => handleChange(e, "jobDescription")}
			/>
			<button
				className="add-work-btn"
				type="submit"
				onClick={handleSubmit}
			>
				Add
			</button>
		</div>
	)
}
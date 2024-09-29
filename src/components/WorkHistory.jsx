import { useRef } from 'react';
import { Input } from './utils'
import { initWorkHistory } from './initData'

export default function WorkHistory({ data, setData, list, setList }) {
	const formRef = useRef(null);

	function handleChange(e, name) {
    setData({
      ...data,
      [name]: e.target.value,
    })
  }
  
  function handleList(e) {
    e.preventDefault();
		 // Check if the form is valid
		if (formRef.current.checkValidity()) {
      const newEntry = { ...data, id: crypto.randomUUID() }
			setList([
				...list,
				newEntry,
			])
			setData(initWorkHistory)
    } else {
      formRef.current.reportValidity();
    }
  }

  function handleDel(itemId) {
    setList(
      list.filter(item => item.id !== itemId)
    )
  }

  function handleEdit(item) {
    setData(item)
    handleDel(item.id)
  }

	return (
		<div className="input-cont">
			<form action="" ref={formRef} onSubmit={handleList}>
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
				>
					Add
				</button>
			</form>
			{list.map((item) => (
				<div key={item.id}>
					<h3>{item.jobTitle}</h3>
					<p>{item.company}</p>
					<p>{item.location}</p>
					<div className="education-dates-cont">
						<div>Start date: {item.startDate}</div>
						<div>End date: {item.endDate}</div>
					</div>
					<p>{item.jobDescription}</p>
					<button
						onClick={() => handleEdit(item)}
					>Edit</button>
					<button
						onClick={() => handleDel(item.id)}
					>X</button>
				</div>
			))}
		</div>
	)
}
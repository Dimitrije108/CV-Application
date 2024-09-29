import { useRef } from 'react';
import { Input } from './utils'
import { initEducation } from './initData'

export default function Education({ data, setData, list, setList }) {
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
			setData(initEducation)
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
				>
					Add
				</button>
			</form>
			{list.map((item) => (
				<div key={item.id}>
					<h3>{item.degree}</h3>
					<p>{item.school}</p>
					<p>{item.city}</p>
					<div className="education-dates-cont">
						<div>Start date: {item.startDate}</div>
						<div>End date: {item.endDate}</div>
					</div>
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

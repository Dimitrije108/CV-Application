import { useRef } from 'react';
import { Input } from './utils';
import { initWorkHistory } from './initData';
import editIcon from '/src/assets/edit-icon.svg';
import closeIcon from '/src/assets/close-icon.svg';

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
				<div className="date-input-cont">
					<div>
						<Input
							label={"Start date"}
							type={"month"}
							name={"startDate"}
							data={data.startDate}
							handleChange={handleChange}
						/>
					</div>
					<div className="end-date">
						<Input
							label={"End date"}
							type={"month"}
							name={"endDate"}
							data={data.endDate}
							handleChange={handleChange}
						/>
					</div>
				</div>
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
				<div key={item.id} className="cont-wrapper">
					<div className="cont-heading-wrapper">
						<h3>{item.jobTitle}</h3>
						<button
							className='edit-btn'
							onClick={() => handleEdit(item)}
						>
							<img src={editIcon} alt="" width="15px" height="15px" />
						</button>
						<button
							className='del-btn'
							onClick={() => handleDel(item.id)}
						>
							<img src={closeIcon} alt="" width="15px" height="15px" />
						</button>
					</div>
					<div className="card-wrapper">
						<div className="card-info-cont">
							<p>{item.company}</p>
							<p>{item.location}</p>
						</div>
						<div className="dates-cont">
							<div>Start date: {item.startDate}</div>
							<div>End date: {item.endDate}</div>
						</div>
					</div>
					<p className='jobDesc'>{item.jobDescription}</p>
				</div>
			))}
		</div>
	)
}
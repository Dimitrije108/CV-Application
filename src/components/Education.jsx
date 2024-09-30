import { useRef } from 'react';
import { Input } from './utils';
import { initEducation } from './initData';
import editIcon from '/src/assets/edit-icon.svg';
import closeIcon from '/src/assets/close-icon.svg';

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
				<button
					className="add-education-btn"
					type="submit"
				>
					Add
				</button>
			</form>
			{list.map((item) => (
				<div key={item.id} className="cont-wrapper">
					<div className="cont-heading-wrapper">
						<h3>{item.degree}</h3>
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
							<p>{item.school}</p>
							<p>{item.city}</p>
						</div>
						<div className="dates-cont">
							<div>Start date: {item.startDate}</div>
							<div>End date: {item.endDate}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

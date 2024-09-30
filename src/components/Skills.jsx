import { useRef } from 'react';
import { Input } from './utils';
import closeIcon from '/src/assets/close-icon.svg';

export default function Skills({ data, setData, list, setList }) {
	const formRef = useRef(null);
	
	function handleChange(e) {
    setData(e.target.value)
  }
  
  function handleList(e) {
		e.preventDefault();
		 // Check if the form is valid
		if (formRef.current.checkValidity()) {
      const newEntry = { skill: data, id: crypto.randomUUID() }
			setList([
				...list,
				newEntry,
			])
			setData("")
    } else {
      formRef.current.reportValidity();
    }
  }

  function handleDel(itemId) {
    setList(
      list.filter(item => item.id !== itemId)
    )
  }

	return (
		<div  className="input-cont">
			<form action="" ref={formRef} onSubmit={handleList}>
				<Input
					data={data}
					handleChange={handleChange}
				/>
				<button
					className="add-skill-btn"
					type="submit"
				>
					Add
				</button>
			</form>
			<div className="skill-list-cont">
				{list.map((item) => (
					<div key={item.id} className="skill-cont">
						<div>{item.skill}</div>
						<button
							className='del-btn'
							onClick={() => handleDel(item.id)}
						>
							<img src={closeIcon} alt="" width="14px" height="14px" />
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
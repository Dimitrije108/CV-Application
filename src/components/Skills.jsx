import { Input } from './utils'

export default function Skills({ data, setData, list, setList }) {
	function handleChange(e) {
    setData(e.target.value)
  }
  
  function handleList(e) {
    e.preventDefault();
    const newEntry = { skill: data, id: crypto.randomUUID() }
    setList([
      ...list,
      newEntry,
    ])
    setData("")
  }

  function handleDel(itemId) {
    setList(
      list.filter(item => item.id !== itemId)
    )
  }

	return (
		<div  className="input-cont">
			<Input
				data={data}
				handleChange={handleChange}
			/>
			<button
				className="add-skill-btn"
				type="submit"
				onClick={handleList}
			>
				Add
			</button>
			{list.map((item) => (
				<div key={item.id}>
					<div>{item.skill}</div>
					<button
						onClick={() => handleDel(item.id)}
					>X</button>
				</div>
			))}
		</div>
	)
}
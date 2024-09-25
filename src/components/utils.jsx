export function Input({ 
  label,
  type = 'text',
  name,
  data,
  handleChange,
  placeholder
}) {
	return (
		<label>
      {label}
      {' '}
      <input
				type={type}
        name={name}
        value={data}
        onChange={(e) => handleChange(e, name)}
        placeholder={placeholder}
      />
    </label>
	)
}
export function Input({ label, type = 'text', value, onChange}) {
	return (
		<label>
      {label}
      {' '}
      <input
				type={type}
        value={value}
        onChange={onChange}
      />
    </label>
	)
}
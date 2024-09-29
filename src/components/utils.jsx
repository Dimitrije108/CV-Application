export function Input({ 
  label,
  type = 'text',
  name,
  data,
  handleChange,
  placeholder,
  minlength = '2',
  maxlength = '20',
}) {
	return (
    <>
      <label>
        {label}
        {' '}
      </label>
      <input
        type={type}
        name={name}
        value={data}
        onChange={(e) => handleChange(e, name)}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        required
      />
    </>
	)
}
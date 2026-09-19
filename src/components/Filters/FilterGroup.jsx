import css from './Filters.module.css'

export default function FilterGroup({
  title,
  name,
  type = 'radio',
  options,
  value,
  onChange,
}) {
  return (
    <fieldset className={css.group}>
      <legend className={css.label}>{title}</legend>
      {Object.entries(options).map(([key, label]) => (
        <label key={key} className={css.option}>
          <input
            type={type}
            name={name}
            value={key}
            checked={type === 'checkbox' ? value.includes(key) : value === key}
            onChange={onChange}
          />
          {label}
        </label>
      ))}
    </fieldset>
  )
}

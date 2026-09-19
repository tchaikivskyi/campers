import { useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import css from './BookingForm.module.css'

const FIELDS = [
  { name: 'name', type: 'text', placeholder: 'Name*' },
  { name: 'email', type: 'email', placeholder: 'Email*' },
]

const NAME_REGEX = /^[\p{L}\s'-]{2,}$/u
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = ({ name, email }) => {
  const errors = {}
  if (!NAME_REGEX.test(name.trim())) {
    errors.name = 'Please enter your name.'
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = 'Please enter your email.'
  }
  return errors
}

export default function BookingForm({ camperName }) {
  const [values, setValues] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    toast.success(`${camperName} is booked! We will contact you soon.`)
    setValues({ name: '', email: '' })
  }

  return (
    <form className={css.form} onSubmit={handleSubmit} noValidate>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      {FIELDS.map((field) => (
        <label key={field.name} className={css.field}>
          <input
            className={errors[field.name] ? css.inputError : css.input}
            value={values[field.name]}
            onChange={handleChange}
            {...field}
          />
          {errors[field.name] && (
            <>
              <span className={css.errorLabel}>{field.placeholder}</span>
              <Icon name="error" className={css.errorIcon} />
              <span className={css.error}>{errors[field.name]}</span>
            </>
          )}
        </label>
      ))}
      <Button type="submit" className={css.btn}>
        Send
      </Button>
    </form>
  )
}

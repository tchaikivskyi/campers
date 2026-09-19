import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  initialState,
  resetFilters,
  setFilters,
} from '../../redux/filters/slice'
import { selectFilters } from '../../redux/filters/selectors'
import {
  ENGINES,
  EQUIPMENT,
  FORMS,
  TRANSMISSIONS,
} from '../../utils/constants'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import FilterGroup from './FilterGroup'
import css from './Filters.module.css'

export default function Filters() {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)
  const [values, setValues] = useState(filters)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target
    const equipment = checked
      ? [...values.equipment, value]
      : values.equipment.filter((item) => item !== value)
    setValues({ ...values, equipment })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilters({ ...values, location: values.location.trim() }))
  }

  const handleClear = () => {
    setValues(initialState)
    dispatch(resetFilters())
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="location">
        Location
      </label>
      <div className={css.inputWrap}>
        <Icon name="map" className={css.inputIcon} />
        <input
          className={css.input}
          id="location"
          type="text"
          name="location"
          placeholder="City"
          value={values.location}
          onChange={handleChange}
        />
      </div>

      <h2 className={css.title}>Filters</h2>
      <FilterGroup
        title="Camper form"
        name="form"
        options={FORMS}
        value={values.form}
        onChange={handleChange}
      />
      <FilterGroup
        title="Engine"
        name="engine"
        options={ENGINES}
        value={values.engine}
        onChange={handleChange}
      />
      <FilterGroup
        title="Transmission"
        name="transmission"
        options={TRANSMISSIONS}
        value={values.transmission}
        onChange={handleChange}
      />
      <FilterGroup
        title="Equipment"
        name="equipment"
        type="checkbox"
        options={EQUIPMENT}
        value={values.equipment}
        onChange={handleEquipmentChange}
      />

      <Button type="submit" className={css.btn}>
        Search
      </Button>
      <Button variant="outline" className={css.btn} onClick={handleClear}>
        <Icon name="close" size={24} />
        Clear filters
      </Button>
    </form>
  )
}

import { useDispatch } from 'react-redux'
import { resetFilters } from '../../redux/filters/slice'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import image from '../../assets/no-campers.png'
import css from './NoResults.module.css'

export default function NoResults() {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetFilters())
  }

  return (
    <div className={css.wrap}>
      <img src={image} alt="" width="488" height="463" />
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn’t find any campers that match your filters. Try adjusting your
        search or clearing some filters.
      </p>
      <div className={css.buttons}>
        <Button variant="outline" className={css.btn} onClick={handleReset}>
          <Icon name="close" size={24} />
          Clear filters
        </Button>
        <Button className={css.btn} onClick={handleReset}>
          View all campers
        </Button>
      </div>
    </div>
  )
}

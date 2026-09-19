import clsx from 'clsx'
import Icon from '../Icon/Icon'
import css from './Rating.module.css'

const STARS = [1, 2, 3, 4, 5]

export default function Rating({ value }) {
  return (
    <div className={css.rating} aria-label={`Rating ${value} out of 5`}>
      {STARS.map((star) => (
        <Icon
          key={star}
          name="star"
          size={16}
          className={clsx(css.star, star <= value && css.active)}
        />
      ))}
    </div>
  )
}

import Icon from '../Icon/Icon'
import { formatLocation } from '../../utils/format'
import css from './CamperMeta.module.css'

export default function CamperMeta({ rating, reviewsCount, location }) {
  return (
    <div className={css.meta}>
      <p className={css.item}>
        <Icon name="star" size={16} className={css.star} />
        {rating}({reviewsCount} Reviews)
      </p>
      <p className={css.item}>
        <Icon name="map" size={16} />
        {formatLocation(location)}
      </p>
    </div>
  )
}

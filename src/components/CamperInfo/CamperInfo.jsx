import CamperMeta from '../CamperMeta/CamperMeta'
import { formatPrice } from '../../utils/format'
import css from './CamperInfo.module.css'

export default function CamperInfo({ camper }) {
  const { name, price, rating, reviews, location, description } = camper

  return (
    <div className={css.card}>
      <h1 className={css.title}>{name}</h1>
      <CamperMeta
        rating={rating}
        reviewsCount={reviews.length}
        location={location}
      />
      <p className={css.price}>{formatPrice(price)}</p>
      <p className={css.description}>{description}</p>
    </div>
  )
}

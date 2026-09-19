import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import CamperMeta from '../CamperMeta/CamperMeta'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { ENGINES, FORMS, TRANSMISSIONS } from '../../utils/constants'
import { formatPrice } from '../../utils/format'
import css from './CamperCard.module.css'

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    gallery,
    engine,
    transmission,
    form,
  } = camper

  return (
    <article className={css.card}>
      <img className={css.img} src={gallery[0].thumb} alt={name} />
      <div className={css.content}>
        <div className={css.top}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.price}>
            <p className={css.title}>{formatPrice(price)}</p>
            <FavoriteButton id={id} />
          </div>
        </div>
        <CamperMeta
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
        />
        <p className={css.description}>{description}</p>
        <ul className={css.badges}>
          <Badge icon="fuel">{ENGINES[engine]}</Badge>
          <Badge icon="diagram">{TRANSMISSIONS[transmission]}</Badge>
          <Badge icon="car">{FORMS[form]}</Badge>
        </ul>
        <Button to={`/catalog/${id}`} target="_blank" rel="noreferrer">
          Show more
        </Button>
      </div>
    </article>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { toggleFavorite } from '../../redux/favorites/slice'
import { selectFavorites } from '../../redux/favorites/selectors'
import Icon from '../Icon/Icon'
import css from './FavoriteButton.module.css'

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch()
  const favorites = useSelector(selectFavorites)
  const isFavorite = favorites.includes(id)

  return (
    <button
      type="button"
      className={clsx(css.btn, isFavorite && css.active)}
      onClick={() => dispatch(toggleFavorite(id))}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Icon name={isFavorite ? 'heart-filled' : 'heart'} size={24} />
    </button>
  )
}

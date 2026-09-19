import Rating from '../Rating/Rating'
import css from './Reviews.module.css'

export default function Reviews({ reviews }) {
  if (reviews.length === 0) {
    return <p>There are no reviews yet.</p>
  }

  return (
    <ul className={css.list}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li key={reviewer_name + comment} className={css.item}>
          <div className={css.head}>
            <span className={css.avatar}>{reviewer_name[0]}</span>
            <div>
              <p className={css.name}>{reviewer_name}</p>
              <Rating value={reviewer_rating} />
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  )
}

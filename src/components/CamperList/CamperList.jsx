import CamperCard from '../CamperCard/CamperCard'
import css from './CamperList.module.css'

export default function CamperList({ campers }) {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  )
}

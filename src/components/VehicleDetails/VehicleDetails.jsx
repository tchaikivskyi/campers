import Badge from '../Badge/Badge'
import {
  ENGINES,
  EQUIPMENT,
  FORMS,
  TRANSMISSIONS,
} from '../../utils/constants'
import { formatUnits } from '../../utils/format'
import css from './VehicleDetails.module.css'

const DETAILS = ['length', 'width', 'height', 'tank', 'consumption']

export default function VehicleDetails({ camper }) {
  const equipment = Object.keys(EQUIPMENT).filter((key) => camper[key])

  return (
    <div className={css.card}>
      <h2 className={css.title}>Vehicle details</h2>
      <ul className={css.badges}>
        <Badge>{TRANSMISSIONS[camper.transmission]}</Badge>
        <Badge>{ENGINES[camper.engine]}</Badge>
        {equipment.map((key) => (
          <Badge key={key}>{EQUIPMENT[key]}</Badge>
        ))}
        <Badge>{FORMS[camper.form]}</Badge>
      </ul>
      <ul className={css.details}>
        <li className={css.row}>
          <span>Form</span>
          <span>{FORMS[camper.form]}</span>
        </li>
        {DETAILS.map((key) => (
          <li key={key} className={css.row}>
            <span className={css.name}>{key}</span>
            <span>{formatUnits(camper[key])}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

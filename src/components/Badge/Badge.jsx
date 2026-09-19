import Icon from '../Icon/Icon'
import css from './Badge.module.css'

export default function Badge({ icon, children }) {
  return (
    <li className={css.badge}>
      {icon && <Icon name={icon} />}
      {children}
    </li>
  )
}

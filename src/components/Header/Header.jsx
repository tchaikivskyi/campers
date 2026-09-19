import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import logo from '../../assets/logo.svg'
import css from './Header.module.css'

const getLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active)

export default function Header() {
  return (
    <header className={css.header}>
      <Link to="/">
        <img src={logo} alt="TravelTrucks" width="136" height="16" />
      </Link>
      <nav className={css.nav}>
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  )
}

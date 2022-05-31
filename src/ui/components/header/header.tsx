import { Link } from 'react-router-dom'
import { appa, logo } from '../../../assets'
import PATHS from '../../../routes/paths'
import './header.css'

type HeaderProps = {
  menu?: boolean
}

const OPTIONS_MENU = [
  {
    path: PATHS.INITIAL,
    label: 'Início',
  },
  {
    path: PATHS.GAME,
    label: 'Jogo da memória',
  },
]

const HeaderMenu = () => {
  return (
    <nav className="header--menu">
      <ul>
        {OPTIONS_MENU.map(option => {
          return (
            <li>
              <Link to={option.path}>{option.label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Header = ({ menu }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header--content-wrapper">
        <div className="header--logo-wrapper">
          <img src={logo} alt="Simbolos dos quatro elementos, agua, fogo, terra e ar" />
          {menu && <HeaderMenu />}
        </div>
        <img src={appa} alt="Personagem Appa voando" />
      </div>
    </header>
  )
}

export { Header }

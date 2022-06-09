import PATHS from '../../../routes/paths'
import { Header, Container, Title, Link } from '../../components'
import './menu.screen.css'

const MenuScreen = () => {
  return (
    <>
      <Header />
      <Container className="menu--container">
        <div className="menu--content-container" role="menu">
          <Title>Menu Inicial</Title>

          <div className="menu--options-container">
            <Link variant="button" as="route-link" href={PATHS.INITIAL}>
              Inicio
            </Link>
            <Link variant="button" as="route-link" href={PATHS.GAME}>
              Jogo da Memória
            </Link>
            <Link variant="button" as="route-link" href={PATHS.GALLERY}>
              Galeria
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}

export { MenuScreen }

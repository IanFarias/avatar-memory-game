import { useHistory } from 'react-router-dom'
import PATHS from '../../../routes/paths'
import { Button, Header, Container, Title } from '../../components'
import './menu.screen.css'

const MenuScreen = () => {
  const history = useHistory()

  return (
    <>
      <Header />
      <Container className="menu--container">
        <div className="menu--options-container">
          <Title>Menu Inicial</Title>
          <Button variant="primary" onClick={() => history.push(PATHS.INITIAL)}>
            Inicio
          </Button>
          <Button variant="primary" onClick={() => history.push(PATHS.GAME)}>
            Jogo da Memória
          </Button>
          <Button variant="primary" onClick={() => history.push(PATHS.GALLERY)}>
            Galeria
          </Button>
        </div>
      </Container>
    </>
  )
}

export { MenuScreen }

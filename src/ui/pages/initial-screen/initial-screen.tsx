import { useHistory } from 'react-router-dom'
import PATHS from '../../../routes/paths'
import { Container, Header, Title } from '../../components'
import { Button } from '../../components/button/button'
import './initial-screen.css'

const InitialScreen = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(PATHS.MENU)
  }

  return (
    <>
      <Header />
      <Container className="initial-screen--container ">
        <div className="initial-screen--wrapper container">
          <div className="initial-screen--title-wrapper">
            <Title>Avatar</Title>
            <Title as="h2">Jogo da memória</Title>
          </div>
          <div className="initial-screen--options-container">
            <Button onClick={handleClick} variant="start">
              Começar
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export { InitialScreen }

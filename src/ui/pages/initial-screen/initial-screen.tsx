import { useHistory } from 'react-router-dom'
import PATHS from '../../../routes/paths'
import { Header } from '../../components'
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
      <main className="initial-screen--container ">
        <div className="initial-screen--wrapper container">
          <div className="initial-screen--title-wrapper">
            <h1>Avatar</h1>
            <h2>Jogo da memória</h2>
          </div>
          <div className="initial-screen--options-container">
            <Button onClick={handleClick} variant="start">
              Começar
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export { InitialScreen }

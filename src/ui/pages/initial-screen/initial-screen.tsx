import { useHistory } from 'react-router-dom'
import { appa, logo } from '../../../assets'
import PATHS from '../../../routes/paths'
import { Button } from '../../components/button/button'
import './initial-screen.css'

const InitialScreen = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(PATHS.GAME)
  }

  return (
    <>
      <header className="initial--header">
        <div className="initial--header--content-wrapper">
          <img src={logo} alt="Simbolos dos quatro elementos, agua, fogo, terra e ar" />
          <img src={appa} alt="Personagem Appa voando" />
        </div>
      </header>
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
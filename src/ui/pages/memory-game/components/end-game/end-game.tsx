import { useHistory } from 'react-router-dom'
import PATHS from '../../../../../routes/paths'
import { Button } from '../../../../components'
import './end-game.css'

const EndGame = () => {
  const history = useHistory()

  const handleClickGoBack = () => {
    history.push(PATHS.MENU)
  }

  const handleClickRestart = () => {
    window.location.reload()
  }

  return (
    <div className="end-game--container">
      <h1 role="alert">Você ganhou!</h1>
      <h2>Todos as pares encontrados</h2>
      <Button onClick={handleClickRestart} variant="primary">
        Jogar novamente
      </Button>
      <Button onClick={handleClickGoBack} variant="secondary">
        Menu Principal
      </Button>
    </div>
  )
}

export { EndGame }

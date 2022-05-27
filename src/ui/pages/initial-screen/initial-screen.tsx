import { appa, logo } from '../../../assets'
import { Button } from '../../components/button/button'
import './initial-screen.css'

const InitialScreen = () => {
  return (
    <>
      <header className="initial--header ">
        <div className="content-wrapper ">
          <img src={logo} alt="Simbolos dos quatro elementos, agua, fogo, terra e ar" />
          <img src={appa} alt="Personagem Appa voando" />
        </div>
      </header>
      <main className="initial-screen--container container">
        <h1>Jogo da Memória</h1>
        <div>
          <Button onClick={() => console.log('COMECAR')} variant="primary">
            Jogar
          </Button>
        </div>
      </main>
    </>
  )
}

export { InitialScreen }

import { appa, logo } from '../../../assets'
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
      <main>
        <h1>tela inicial</h1>
      </main>
    </>
  )
}

export { InitialScreen }

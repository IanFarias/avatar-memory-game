import { appa, logo } from '../../../assets'
import './initial-screen.css'

const InitialScreen = () => {
  return (
    <>
      <header className="initial--header ">
        <div className="content-wrapper ">
          <img src={logo} alt="" />
          <img src={appa} alt="" />
        </div>
      </header>
      <main>
        <h1>tela inicial</h1>
      </main>
    </>
  )
}

export { InitialScreen }

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ROUTER from './routes/router'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route {...ROUTER.INITIAL} exact />
        <Route {...ROUTER.GAME} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App

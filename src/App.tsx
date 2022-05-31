import { Route, Switch } from 'react-router-dom'

import ROUTER from './routes/router'
import './App.css'

function App() {
  return (
    <Switch>
      <Route {...ROUTER.INITIAL} exact />
      <Route {...ROUTER.GAME} exact />
      <Route {...ROUTER.MENU} exact />
    </Switch>
  )
}

export default App

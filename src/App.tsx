import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ROUTER from './routes/router'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route {...ROUTER.INITIAL} />
      </Switch>
    </Router>
  )
}

export default App

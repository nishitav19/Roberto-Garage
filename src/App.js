import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/Home'
import Services from './components/Services'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <CssBaseline>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Services} />
        </Switch>
      </CssBaseline>
    </Router>
  );
}

export default App

import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <CssBaseline>
        <Switch>
          <Route exact='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </CssBaseline>
    </Router>
  );
}

export default App;

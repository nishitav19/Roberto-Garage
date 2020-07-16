import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/Dashboard'
import Confirmation from './components/Confirmation'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <CssBaseline>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <ProtectedRoute path='/confirmation' component={Confirmation} />
        </Switch>
      </CssBaseline>
    </Router>
  );
}

export default App
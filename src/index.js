import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './pages/App.jsx'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/demo' component={App}/>
      <Route exact path='/test' component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

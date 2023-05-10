import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SignUpPage from './views/sign-up-page'
import MainPage from './views/main-page'
import CreateAutomation from './views/create-automation'
import AutomationPage from './views/automation-page'
import Frame1SignInPage from './views/frame-sign-in-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SignUpPage} exact path="/sign-up-page" />
        <Route component={MainPage} exact path="/main-page" />
        <Route component={CreateAutomation} exact path="/create-automation" />
        <Route component={AutomationPage} exact path="/automation-page" />
        <Route component={Frame1SignInPage} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

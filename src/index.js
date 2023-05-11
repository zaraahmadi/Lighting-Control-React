import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SignUpPage2 from './views/sign-up-page-2'
import MainPage3 from './views/main-page-3'
import IAmAwayAutoCreated6 from './views/i-am-away-auto-created-6'
import CreateAutomation5 from './views/create-automation-5'
import AutomationPage4 from './views/automation-page-4'
import SignInPage1 from './views/sign-in-page-1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SignUpPage2} exact path="/sign-up-page-2" />
        <Route component={MainPage3} exact path="/main-page-3" />
        <Route
          component={IAmAwayAutoCreated6}
          exact
          path="/i-am-away-auto-created-6"
        />
        <Route
          component={CreateAutomation5}
          exact
          path="/create-automation-5"
        />
        <Route component={AutomationPage4} exact path="/automation-page-4" />
        <Route component={SignInPage1} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

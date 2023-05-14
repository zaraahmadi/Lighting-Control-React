import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MainPage3 from './views/main-page-3'
import Test from './views/test'
import IAmAwayAutoCreated6 from './views/i-am-away-auto-created-6'
import CreateAutomation5 from './views/create-automation-5'
import AutomationPage4 from './views/automation-page-4'
import SignInPage1 from './views/sign-in-page-1'
import SupportPage7 from './views/support-page-7'
import LiveChatPage8 from './views/live-chat-page-8'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MainPage3} exact path="/main-page-3" />
        <Route component={Test} exact path="/test" />
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
        <Route component={SupportPage7} exact path="/support-page-7" />
        <Route component={LiveChatPage8} exact path="/live-chat-page-8" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

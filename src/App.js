import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import BackEnd from './components/backend'
import FrontEnd from './components/frontend'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={FrontEnd} />
          <Route path='/tracks' component={BackEnd} />
        </div>
      </Router>
    )
  }
}

export default App

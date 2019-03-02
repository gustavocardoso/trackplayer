import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Admin from './backend'
import TrackPlayer from './frontend'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={TrackPlayer} />
            <Route path='/tracks' component={Admin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

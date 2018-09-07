import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'
import About from './about'

const App = () => (
  <div>
    <Route exact path="/:lng" component={Home} />
    <Route exact path="/:lng/about-us" component={About} />
  </div>
)

export default App

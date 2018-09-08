import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Prices from './prices'
import Wallet from './wallet'
import Account from './account'

const App = () => (
  <Switch>
    <Route exact path="/:lng/prices" component={Prices} />
    <Route exact path="/:lng/wallet" component={Wallet} />
    <Route exact path="/:lng/account" component={Account} />
    <Route render={() => <Redirect to="/zh-TW/prices" />} />
  </Switch>
)

export default App

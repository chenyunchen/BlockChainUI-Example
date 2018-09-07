import React from 'react'
import { Route } from 'react-router-dom'
import Prices from './prices'
import Wallet from './wallet'
import Account from './account'

const App = () => (
  <div>
    <Route exact path="/:lng/prices" component={Prices} />
    <Route exact path="/:lng/wallet" component={Wallet} />
    <Route exact path="/:lng/account" component={Account} />
  </div>
)

export default App

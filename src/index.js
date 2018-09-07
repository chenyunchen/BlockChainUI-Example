import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store/configureStore'
import App from './routes'
import registerServiceWorker from './registerServiceWorker'

import LocaleContainer from './containers/LocaleContainer'

import './App.css'

ReactDOM.render(
  <Provider store={store}>
    <LocaleContainer>
      <ConnectedRouter history={history}>
        <App className="App" />
      </ConnectedRouter>
    </LocaleContainer>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

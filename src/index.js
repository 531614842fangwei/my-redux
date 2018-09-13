import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Provider from './lib/react-redux/provider'
import App from './App'
import store from './model'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

export default store.dispatch

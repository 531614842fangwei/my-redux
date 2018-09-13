import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { createStore } from './lib/redux/'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const initState = {
  themeColor: 'green',
  size: '20px'
}
const reducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case 'updateTheme':
      return { ...state, ...payload }

    default:
      break
  }
}
const store = createStore(initState, reducer)

class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.store = store
  }
  getChildContext() {
    return { store: this.store }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

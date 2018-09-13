import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.store = this.props.store
  }
  getChildContext() {
    return { store: this.store }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
export default Provider

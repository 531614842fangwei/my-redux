import React from 'react'
import PropTypes from 'prop-types'
class Main extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }
  componentWillMount() {
    const { store } = this.context
    this._update()
    store.subscribe(() => this._updateThemeColor())
  }
  _update() {
    const { store } = this.context
    const state = store.getState()
    this.setState({ ...state })
  }

  render() {
    return (
      <div style={{ color: this.state.themeColor }}>
        {this.props.children}
      </div>
    )
  }
}
export default Main

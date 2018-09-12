import React from 'react'
import PropTypes from 'prop-types'
class Main extends React.Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div style={{ color: this.context.themeColor }}>
        {this.props.children}
      </div>
    )
  }
}
export default Main

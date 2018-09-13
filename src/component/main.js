import React from 'react'
import connect from '../lib/react-redux/connect'
class Main extends React.Component {
  render() {
    return (
      <div
        // style={{ color: this.context.themeColor }} // 解耦context
        style={{ color: this.props.themeColor }}
      >
        {this.props.children}
      </div>
    )
  }
}
export default connect()(Main)

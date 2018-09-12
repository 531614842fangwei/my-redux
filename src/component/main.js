import React from 'react'
class Main extends React.Component {
  render() {
    return <div style={{ color: this.props.color }}>{this.props.children}</div>
  }
}
export default Main

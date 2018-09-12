import React from 'react'
class Sub extends React.Component {
  render() {
    return <div style={{ color: this.props.color }}>{this.props.children}</div>
  }
}
export default Sub

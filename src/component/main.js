import React from 'react'
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }
  render() {
    return <div style={{ color: this.state.color }}>{this.props.children}</div>
  }
}
export default Main

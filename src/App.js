import React, { Component } from 'react'
import Main from './component/main'
import Sub from './component/subtitle'
import Switch from './component/switch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }
  render() {
    const color = this.state.color
    return (
      <div>
        <Main color={color}>主体文字</Main>
        <Sub color={color}>副标题</Sub>
        <Switch
          onClick={() => {
            this.setState({ color: 'red' })
          }}
        >
          红色
        </Switch>
        <Switch
          onClick={() => {
            this.setState({ color: 'blue' })
          }}
        >
          蓝色
        </Switch>
      </div>
    )
  }
}

export default App

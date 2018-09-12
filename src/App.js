import React, { Component } from 'react'
import Main from './component/main'
import Sub from './component/subtitle'
import Switch from './component/switch'

class App extends Component {
  render() {
    return (
      <div>
        <Main>主体文字</Main>
        <Sub>副标题</Sub>
        <Switch>红色</Switch>
        <Switch>蓝色</Switch>
      </div>
    )
  }
}

export default App

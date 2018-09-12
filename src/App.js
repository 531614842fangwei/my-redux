import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Main from './component/main'
import Sub from './component/subtitle'
import Switch from './component/switch'

class App extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      themeColor: 'red'
    }
  }
  getChildContext () {
    return { themeColor: this.state.themeColor }
  }
  render() {
    return (
      <div>
        <Main>主体文字</Main>
        <Sub>副标题</Sub>
        <Switch
          onClick={() => {
            this.setState({ themeColor: 'red' })
          }}
        >
          红色
        </Switch>
        <Switch
          onClick={() => {
            this.setState({ themeColor: 'blue' })
          }}
        >
          蓝色
        </Switch>
      </div>
    )
  }
}

export default App

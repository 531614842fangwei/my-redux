import React, { Component } from 'react'
import Main from './component/main'
import Sub from './component/subtitle'
import Switch from './component/switch'
import dispatch from './index'

class App extends Component {
  render() {
    return (
      <div>
        <Main>主体文字</Main>
        <Sub>副标题</Sub>
        <Switch>红色</Switch>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'updateTheme', payload: { themeColor: 'blue' } })
          }}
        >
          蓝色
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'updateSize', payload: { size: '80px' } })
          }}
        >
          变大
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'updateSize', payload: { size: '20px' } })
          }}
        >
          变小
        </button>
      </div>
    )
  }
}

export default App

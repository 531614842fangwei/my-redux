import React from 'react'
import connect from '../lib/react-redux/connect'

const Switch = ({ children, changeColorRed }) => {
  return (
    <button
      style={{ display: 'inline-block', border: '1px solid', margin: '10px' }}
      onClick={changeColorRed}
    >
      {children}
    </button>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    changeColorRed() {
      dispatch({ type: 'updateTheme', payload: { themeColor: 'red' } })
    }
  }
}
export default connect(
  undefined,
  mapDispatchToProps
)(Switch)

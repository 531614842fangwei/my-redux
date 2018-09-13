import React from 'react'
import connect from '../lib/react-redux/connect'

const Switch = ({ children, onClick }) => {
  return (
    <button
      style={{ display: 'inline-block', border: '1px solid', margin: '10px' }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default connect()(Switch)

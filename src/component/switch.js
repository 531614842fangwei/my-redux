import React from 'react'
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
export default Switch

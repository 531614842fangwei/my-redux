import React from 'react'
import connect from '../lib/react-redux/connect'
const Main = ({ children, themeColor }) => {
  return (
    <div
      // style={{ color: this.context.themeColor }} // 解耦context
      style={{ color: themeColor }}
    >
      {children}
    </div>
  )
}

export default connect()(Main)

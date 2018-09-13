import React from 'react'
import connect from '../lib/react-redux/connect'
const Main = ({ children, themeColor }) => {
  return (
    <div
      // style={{ color: this.context.themeColor }} // 解耦context
      style={{ color: themeColor, fontSize: '50px' }}
    >
      {children}
    </div>
  )
}

// 比如说main的字体大小是非常固定的, state中的size根本是Main组件不关心的
const mapStateToProps = ({ themeColor }) => {
  return { themeColor }
}
export default connect(mapStateToProps)(Main)

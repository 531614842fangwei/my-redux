import React from 'react'
import connect from '../lib/react-redux/connect'
const Sub = ({ themeColor, children }) => {
  return (
    <div
      style={{ color: themeColor }}
      // onClick={() => {
      //   // 这样写是没有用的，还是需要通过改变父组件中的state让context起效
      //   this.context.themeColor = 'green'
      // }}
    >
      {children}
    </div>
  )
}
export default connect()(Sub)

import React from 'react'
import connect from '../lib/react-redux/connect'
const Sub = ({ themeColor, children, size }) => {
  return (
    <div
      style={{ color: themeColor, fontSize: size }}
      // onClick={() => {
      //   // 这样写是没有用的，还是需要通过改变父组件中的state让context起效
      //   this.context.themeColor = 'green'
      // }}
    >
      {children}
    </div>
  )
}
const mapStateToProps = ({ themeColor, size }) => {
  return { themeColor, size }
}
export default connect(mapStateToProps)(Sub)

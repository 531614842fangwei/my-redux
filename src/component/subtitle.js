import React from 'react'
import PropTypes from 'prop-types'
class Sub extends React.Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div
        style={{ color: this.context.themeColor }}
        onClick={() => {
          // 这样写是没有用的，还是需要通过改变父组件中的state让context起效
          this.context.themeColor = 'green'
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Sub

/**
 * 这里已经用到了react的东西了
 * 不应该属于redux模块，而是react的redux实现部分
 */
import React from 'react'
import PropTypes from 'prop-types'
const defaultMapStateToProps = state => {
  // 默认有一个mapStateToProps,什么都不做
  return state
}
const connect = (mapStateToProps = defaultMapStateToProps) => {
  return WarppedComponent => {
    return class Connect extends React.Component {
      static contextTypes = {
        store: PropTypes.object
      }
      // componentWillMount() {
      //   const { store } = this.context
      //   this._update()
      //   store.subscribe(() => this._updateThemeColor())
      // }
      // _update() {
      //   const { store } = this.context
      //   const state = store.getState()
      //   this.setState({ ...state })
      // }
      render() {
        const { store } = this.context
        const props = this.props
        let stateProps = mapStateToProps(store.getState())
        const mergedProps = { ...props, ...stateProps }
        return <WarppedComponent {...mergedProps} />
      }
    }
  }
}
export default connect

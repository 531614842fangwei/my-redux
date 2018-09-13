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
const defaultMapDispatchToProps = dispatch => {
  // 默认有一个，什么都不做
  return {}
}
const connect = (
  mapStateToProps = defaultMapStateToProps,
  mapDispatchToProps = defaultMapDispatchToProps
) => {
  return WarppedComponent => {
    return class Connect extends React.Component {
      static contextTypes = {
        store: PropTypes.object
      }
      componentWillMount() {
        const { store } = this.context
        this._update()
        store.subscribe(() => this._update())
      }
      _update() {
        const { store } = this.context
        const props = this.props
        let stateProps = mapStateToProps(store.getState())
        let dispatchProps = mapDispatchToProps(store.dispatch)
        const mergedProps = { ...props, ...stateProps, ...dispatchProps }
        this.setState({ mergedProps })
      }
      render() {
        return <WarppedComponent {...this.state.mergedProps} />
      }
    }
  }
}
export default connect

import { createStore } from '../lib/redux'
const initState = {
  themeColor: 'green',
  size: '20px'
}
const reducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case 'updateTheme':
      return { ...state, ...payload }
    case 'updateSize':
      return { ...state, ...payload }
    default:
      break
  }
}
export default createStore(initState, reducer)

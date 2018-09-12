const createStore = (state, reducer) => {
  const listeners = []
  const subscribe = listener => {
    listeners.push(listener)
  }
  const getState = () => {
    return state
  }
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => {
      listener()
    })
  }
  return { getState, dispatch, subscribe }
}

export default createStore

export const loadingReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case 'OPEN_LOADING':
      return { ...state, loading: true }
    case 'CLOSE_LOADING':
      return { ...state, loading: false }
    default:
      return state
  }
}

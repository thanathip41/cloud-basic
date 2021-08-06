const testReducer = (state = { test: 'test store' }, action) => {
  switch (action.type) {
    case 'test':
      return { ...state, authData: action?.data }
    default:
      return state
  }
}

export default testReducer

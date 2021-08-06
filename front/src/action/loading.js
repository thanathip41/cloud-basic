export const loading = async ({ dispatch, type, time }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type })
      resolve()
    }, time)
  })
}

export const openLoading = () => async (dispatch) => {
  try {
    await loading({
      dispatch,
      type: 'OPEN_LOADING',
      time: 0
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const closeLoading = () => async (dispatch) => {
  try {
    await loading({
      dispatch,
      type: 'CLOSE_LOADING',
      time: 800
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const toggleLoading = () => async (dispatch) => {
  try {
    await loading({
      dispatch,
      type: 'OPEN_LOADING',
      time: 0
    })

    await loading({
      dispatch,
      type: 'CLOSE_LOADING',
      time: 800
    })
  } catch (error) {
    console.log(error.message)
  }
}

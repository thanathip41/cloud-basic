import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { loadingReducer } from './loadingReducer'

export const reducers = combineReducers(
  {
    loading: loadingReducer,
    auth: authReducer
  }
)

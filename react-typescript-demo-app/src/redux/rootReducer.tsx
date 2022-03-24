import { combineReducers } from 'redux'
import routeChangeReducer from './routeChange/routeChangeReducer'

const rootReducer = combineReducers({
  routeChange: routeChangeReducer
})

export default rootReducer
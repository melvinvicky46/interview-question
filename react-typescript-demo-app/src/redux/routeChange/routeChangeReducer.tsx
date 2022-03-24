import { CHECK_ROUTE } from './routeChangeTypes'

const initialState = {
  checkStatus: "pageload"
}

const routeChangeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHECK_ROUTE: return {
      ...state,
      checkStatus: action.payload
    }
    default: return state
  }
}

export default routeChangeReducer
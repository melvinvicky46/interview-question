import { CHECK_ROUTE } from './routeChangeTypes'

export const checkRoute = (status: any) => {
  return {
    type: CHECK_ROUTE,
    payload: status
  }
}
import { http } from "./BaseService"

export const getBeers = () => {
  return http.get('/')
}
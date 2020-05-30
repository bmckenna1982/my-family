import config from '../../config'
import TokenService from './token-services'

const PointsService = {
  getCurrentUserPoints() {
    return fetch(`${config.API_ENDPOINT}/points`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPointsByUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/points/${user_id}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}
export default PointsService
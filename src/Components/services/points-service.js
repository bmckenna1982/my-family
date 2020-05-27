import config from '../../config'
import TokenService from './token-services'

const PointsService = {

  getPointsByUser() {
    return fetch(`${config.API_ENDPOINT}/points`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}
export default PointsService
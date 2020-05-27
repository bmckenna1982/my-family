import config from '../../config'
import TokenService from './token-services'

const RewardsService = {
  getAllRewards() {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
  },
  getReward(rewardId) {
    return fetch(`${config.API_ENDPOINT}/rewards/${rewardId}`, {
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
  },
  postReward(reward) {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(reward)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  updateReward(reward_id, updatedFields) {

    return fetch(`${config.API_ENDPOINT}/rewards/${reward_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedFields)
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : 'res.json()'
      })
  }
}

export default RewardsService
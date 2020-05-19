import config from '../../config'
// import TokenService from './token-service'

const UsersService = {
  getAllUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
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
  getById(id) {
    return fetch(`${config.API_ENDPOINT}/users/${id}`, {
      headers: {
      },
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
  }
}

export default UsersService
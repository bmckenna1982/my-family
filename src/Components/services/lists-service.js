import config from '../../config'
// import TokenService from './token-service'

const ListsService = {
  getAllLists() {
    return fetch(`${config.API_ENDPOINT}/lists`, {
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
  getList(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      headers: {
        // 'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // getRecentLists() {
  //   return fetch(`${config.API_ENDPOINT}/lists/upcoming`, {
  //     headers: {
  //       // 'Authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  postList(list) {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(list)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },

}

export default ListsService
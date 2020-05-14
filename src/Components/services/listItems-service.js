import config from '../../config'
// import TokenService from './token-service'

const ListItemsService = {
  getAllListItems(listId) {
    console.log('listId', listId)
    return fetch(`${config.API_ENDPOINT}/lists/${listId}/listItems`, {
      headers: {
      },
      method: 'GET',
    })
      .then(res => {
        console.log('res', res)
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
  },
  getListItem(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}/{}`, {
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
  // getRecentListItems() {
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
  postListItem(listItem) {
    return fetch(`${config.API_ENDPOINT}/lists/${listItem.list_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(listItem)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },

}

export default ListItemsService
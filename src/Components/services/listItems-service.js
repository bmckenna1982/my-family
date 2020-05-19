import config from '../../config'
import TokenService from './token-services'

const ListItemsService = {
  getAllListItems() {
    return fetch(`${config.API_ENDPOINT}/listItems`, {
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
  getListItemsByList(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}/listItems`, {
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
  updateListItem(ListItem_id, updatedFields) {
    return fetch(`${config.API_ENDPOINT}/listItems/${ListItem_id}`, {
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
  },
  postListItem(listItem) {
    return fetch(`${config.API_ENDPOINT}/listItems`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
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
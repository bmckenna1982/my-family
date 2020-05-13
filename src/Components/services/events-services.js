import config from '../../config'
// import TokenService from './token-service'

const EventsService = {
  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
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
  getEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
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
  getUpcomingEvents() {
    return fetch(`${config.API_ENDPOINT}/events/upcoming`, {
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
  postEvent(event) {
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(event)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  // getRsvp(gameId) {
  //   return fetch(`${config.API_ENDPOINT}/events/${eventId}/rsvp`, {
  //     headers: {
  //       'Authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },

}

export default EventsService
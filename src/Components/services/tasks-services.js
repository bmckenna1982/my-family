import config from '../../config'
// import TokenService from './token-service'

const TasksService = {
  getAllTasks() {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
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
  getTask(taskId) {
    return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
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
  postTask(task) {
    console.log('task', task)
    return fetch(`${config.API_ENDPOINT}/tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  updateTask(task_id, updatedFields) {
    // console.log('updatedFields', updatedFields)
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
      method: 'PATCH',
      headers: {
        // 'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedFields)
    })
      .then(res => {
        console.log('res', res)
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : 'res.json()'
      })
  }
  // getRsvp(gameId) {
  //   return fetch(`${config.API_ENDPOINT}/tasks/${taskId}/rsvp`, {
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

export default TasksService
import React from 'react'

const AppContext = React.createContext({
  events: [],
  tasks: [],
  date: null,
  navOpen: '',
  error: null,
  showModal: false,
  selectedTaskIndex: null,
  addEvent: () => { },
  addTask: () => { },
  toggleListOpen: () => { },
  addToList: () => { },
  addReward: () => { },
  openEdit: () => { }
})

export default AppContext
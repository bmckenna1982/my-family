import React from 'react'

const AppContext = React.createContext({
  events: [],
  tasks: [],
  date: null,
  navOpen: '',
  error: null,
  addEvent: () => { },
  addTask: () => { },
  toggleListOpen: () => { },
  addToList: () => { },
  addReward: () => { }
})

export default AppContext
import React from 'react'

const AppContext = React.createContext({
  events: [],
  tasks: [],
  date: null,
  navOpen: '',
  error: null,
  showEdit: false,
  selectedTaskIndex: null,
  addEvent: () => { },
  addTask: () => { },
  setTasks: () => { },
  toggleListOpen: () => { },
  addToList: () => { },
  addList: () => { },
  setLists: () => { },
  addReward: () => { },
  openEdit: () => { }
})

export default AppContext
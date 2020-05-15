import React from 'react'

const AppContext = React.createContext({
  events: [],
  tasks: [],
  listItems: [],
  date: null,
  navOpen: '',
  error: null,
  showEdit: false,
  selectedTaskIndex: null,
  addEvent: () => { },
  setEvents: () => { },
  addTask: () => { },
  setTasks: () => { },
  toggleListOpen: () => { },
  addListItem: () => { },
  addList: () => { },
  setLists: () => { },
  setListItems: () => { },
  addReward: () => { },
  openEdit: () => { }
})

export default AppContext
import React from 'react'

const AppContext = React.createContext({
  events: [],
  tasks: [],
  error: null,
  addEvent: () => { }
})

export default AppContext
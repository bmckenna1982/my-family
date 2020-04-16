import React, { Component } from 'react'
import Header from '../header/header'
import UpcomingEvents from '../upcomingEvents/upcomingEvents'
import UpcomingTasks from '../upcomingTasks/upcomingTasks'
import LatestLists from '../latestLists/latestLists'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header pageTitle='Daily Overview' />
        <UpcomingEvents />
        <UpcomingTasks />
        <LatestLists />
      </div>
    )
  }
}

export default HomePage
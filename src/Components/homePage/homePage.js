import React, { Component } from 'react'
import Header from '../header/header'
import PointsBar from '../pointsBar/pointsBar'
import UpcomingEvents from '../upcomingEvents/upcomingEvents'
import UpcomingTasks from '../upcomingTasks/upcomingTasks'
import LatestLists from '../latestLists/latestLists'
import AppContext from '../context/appContext'

import './homePage.css'

class HomePage extends Component {
  static contextType = AppContext

  render() {
    return (
      <div className='home-page'>
        <Header pageTitle={`${this.context.currentUser.first_name} ${this.context.currentUser.last_name}`} />
        <PointsBar />
        <UpcomingEvents />
        <UpcomingTasks />
        <LatestLists />
      </div>
    )
  }
}

export default HomePage
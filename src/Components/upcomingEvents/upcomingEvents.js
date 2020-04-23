import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Event from '../event/event'
import AddItemLink from '../addItemLink/addItemLink'

class UpcomingEvents extends Component {
  render() {
    return (
      <section className='upcoming-events'>
        <h2>Upcoming Events</h2>
        <Link to='/add-event' >
          <AddItemLink itemName='Event' />
        </Link>
        {/* <div className='calendar-link'>
          <a href='/calendar'>View Calendar</a>
        </div> */}
        <Event day='Today' time='3pm' title='Baseball practice' />
        <Event day='Wed 14' time='3pm' title='Baseball practice' />
      </section>
    )
  }
}

export default UpcomingEvents
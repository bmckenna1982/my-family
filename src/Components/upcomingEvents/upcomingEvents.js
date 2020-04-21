import React, { Component } from "react"
import Event from '../event/event'
import AddItem from '../addItem/addItem'

class UpcomingEvents extends Component {
  render() {
    return (
      <section className='upcoming-events'>
        <h2>Upcoming Events</h2>
        <AddItem itemName='Event' />
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
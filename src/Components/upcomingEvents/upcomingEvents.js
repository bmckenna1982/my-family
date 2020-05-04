import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Event from '../event/event'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'
import { eventDate, eventTime } from '../utils/utils'

class UpcomingEvents extends Component {
  static contextType = AppContext

  render() {
    console.log('this.context', this.context.events)
    return (
      <section className='upcoming-events'>
        <h2>Upcoming Events</h2>
        {/* <Link to='/add-event' > */}
        <AddItemLink location='/add-event' itemName='Event' />
        {/* </Link> */}
        {/* <div className='calendar-link'>
          <a href='/calendar'>View Calendar</a>
        </div> */}
        {this.context.events.map((event, index) => {
          //test date to show today if its today
          return <Event key={index} day={eventDate(event.date)} time={eventTime(event.startTime)} title={event.title} />
        })
        }
        {/* <Event day='Wed 14' time='3pm' title='Baseball practice' /> */}

      </section>
    )
  }
}

export default UpcomingEvents
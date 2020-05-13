import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Event from '../event/event'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'
import EventsService from '../services/events-services'
import { eventDate, eventTime } from '../utils/utils'

class UpcomingEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  static contextType = AppContext
  componentDidMount() {
    EventsService.getUpcomingEvents()
      .then(data => {
        this.setState({
          events: [...data]
        })
      })
      .catch(err => {
        this.setState({
          error: `Couldn't get events data at this time`
        })
      })
  }

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
        {this.state.events.map((event, index) => {
          //test date to show today if its today
          return <Event key={index} day={eventDate(event.event_date)} time={eventTime(event.start_time)} title={event.title} />
        })
        }
        {/* <Event day='Wed 14' time='3pm' title='Baseball practice' /> */}

      </section>
    )
  }
}

export default UpcomingEvents
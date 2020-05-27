import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Event from '../event/event'
import AddItemLink from '../addItemLink/addItemLink'
// import AppContext from '../context/appContext'
import EventsService from '../services/events-services'
import { eventDate, eventTime } from '../utils/utils'

class UpcomingEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  // static contextType = AppContext
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
    return (
      <section className='upcoming-events'>
        <h2>Upcoming Events</h2>
        <AddItemLink location='/add-event' itemName='Event' />
        {this.state.events.map((event, index) => {
          //test date to show today if its today
          return <Event key={index} day={eventDate(event.event_date)} time={eventTime(event.start_time)} title={event.title} />
        })
        }
      </section>
    )
  }
}

export default UpcomingEvents
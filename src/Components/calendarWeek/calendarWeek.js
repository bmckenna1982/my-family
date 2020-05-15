import React, { Component } from 'react'
import Moment from 'moment'
import Event from '../event/event'
import { formatForCompare } from '../utils/utils'
import AppContext from '../context/appContext'
import './calendarWeek.css'
import EventsService from '../services/events-services'

class CalendarWeek extends Component {
  static contextType = AppContext

  componentDidMount() {
    EventsService.getEvents()
      .then(data => {
        this.context.setEvents(data)
      })
  }

  renderEvent = (day) => {
    console.log('day', day)
    if (day.events) {
      for (const e of day.events) {
        return (
          < div className='calendar-event-container' >
            <Event title={e.title} time={e.start_time} />
          </div >
        )
      }
    }

    // return <div>render Event</div>
  }

  render() {
    let days = []
    const now = Moment([])

    console.log('this.context.events', this.context.events)
    days.push({
      dayOfWeek: 'Today',
      dayOfMonth: now.format('D'),
      events: this.context.events.filter(event => formatForCompare(event.event_date) === formatForCompare(new Date()))
    })
    for (let i = 1; i <= 6; i++) {
      let compareDate = Moment([]).add(i, 'day')
      console.log('compareDate', compareDate)
      days.push({
        dayOfWeek: now.add(1, 'day').format('dddd'),
        dayOfMonth: now.format('D'),
        events: this.context.events.filter(event => formatForCompare(event.event_date) === formatForCompare(compareDate))
      })
    }
    console.log('days', days)
    return (
      <div className='calendar-week-wrapper' id='week'>
        {days.map(day => (
          <div className='calendar-week' key={day.dayOfWeek}>
            <div className='calendar-day-container'>
              <div className='calendar-date-container'>
                <div className='calendar-week-day'>{day.dayOfWeek}</div>
                <div className='calendar-date'>{day.dayOfMonth}</div>
              </div>
              {this.renderEvent(day)}
              {/* <div className='calendar-event-container'>
                <Event title='Baseball practice' time='3pm' />
              </div> */}
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default CalendarWeek
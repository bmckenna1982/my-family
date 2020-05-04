import React, { Component } from 'react'
import Moment from 'moment'
import Event from '../event/event'
import { formatForCompare } from '../utils/utils'
import AppContext from '../context/appContext'
import './calendarWeek.css'

class CalendarWeek extends Component {
  static contextType = AppContext

  render() {
    let days = []
    const now = Moment([])
    days.push({
      dayOfWeek: 'Today',
      dayOfMonth: now.format('D'),
      events: [this.context.events.filter(event => formatForCompare(event.date) === formatForCompare(new Date()))]
    })
    for (let i = 1; i <= 6; i++) {
      days.push({
        dayOfWeek: now.add(1, 'day').format('dddd'),
        dayOfMonth: now.format('D'),
        events: [this.context.events.filter(event => formatForCompare(event.date) === formatForCompare(now.add(1, 'day')))]
      })
    }
    return (
      <div className='calendar-week-wrapper' id='week'>
        {days.map(day => (
          <div className='calendar-week' key={day.dayOfWeek}>
            <div className='calendar-day-container'>
              <div className='calendar-date-container'>
                <div className='calendar-week-day'>{day.dayOfWeek}</div>
                <div className='calendar-date'>{day.dayOfMonth}</div>
              </div>
              <div className='calendar-event-container'>
                <Event title='Baseball practice' startTime='3pm' />
              </div>
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default CalendarWeek
import React, { Component } from 'react'
import Moment from 'moment'
import Event from '../event/event'
import './calendarWeek.css'

class CalendarWeek extends Component {
  render() {
    let days = []
    const now = Moment([])
    days.push({
      dayOfWeek: 'Today',
      dayOfMonth: now.format('D')
    })
    for (let i = 1; i <= 6; i++) {
      days.push({
        dayOfWeek: now.add(1, 'day').format('dddd'),
        dayOfMonth: now.format('D')
      })
    }
    return (
      <div className='wrapper' >
        {days.map(day => (
          <div className='calendar-week' key={day.dayOfWeek}>
            <div className='calendar-day-container'>
              <div className='calendar-date-container'>
                <div className='calendar-day'>{day.dayOfWeek}</div>
                <div className='calendar-date'>{day.dayOfMonth}</div>
              </div>
              <div className='calendar-event-container'>
                <Event title='Baseball practice' time='3pm' />
              </div>
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default CalendarWeek
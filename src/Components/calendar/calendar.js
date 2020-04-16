import React, { Component } from 'react'
import CalendarWeek from '../calendarWeek/calendarWeek'
import CalendarMonth from '../calendarMonth/calendarMonth'


class Calendar extends Component {
  render() {
    return (
      <div className='Calendar'>
        <header className='calendar-month' role='banner'>
          <h1>April</h1>
          <div className='add-item'>+ Add Item </div>
        </header>
        <div className='tab-selection'>
          <div className='week-tab'>Week</div>
          <div className='month-tab'>Month</div>
        </div>
        <div className='calendar-wrapper'>
          {/* if week view show the today and the following 6 days */}
          <CalendarWeek />

          {/* if month view show the current month */}
          <CalendarMonth />
          {/* <Calendar-Day /> */}

        </div>
      </div>
    )
  }
}

export default Calendar
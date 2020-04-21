import React, { Component } from 'react'
import CalendarWeek from '../calendarWeek/calendarWeek'
import CalendarMonth from '../calendarMonth/calendarMonth'


class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monthView: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log('click')
    document.querySelector('#month').classList.toggle('calendar-close')
    document.querySelector('#week').classList.toggle('calendar-close')
  }
  render() {
    return (
      <div className='calendar'>
        <header className='calendar-month' role='banner'>
          <h1>April</h1>
          <div className='add-item'>+ Add Item </div>
        </header>
        <div className='tab-selection'>
          {/* instead of tab make it two divs one says view week one says view month
          each sets the close to the other view */}
          <div className='week-tab' onClick={this.handleClick}>Week</div>
          <div className='month-tab' onClick={this.handleClick}>Month</div>
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
import React, { Component } from 'react'

import Moment from 'moment'
import './calendarMonth.css'

class CalendarMonth extends Component {
  render() {
    const currentMonth = Moment([]).format('MMMM')
    const daysInMonth = Moment().daysInMonth()
    return (
      <div>
        <div>{currentMonth}</div>
        <div>{daysInMonth}</div>
      </div>
    )
  }
}


export default CalendarMonth
import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import './calendar.css'
import CalendarWeek from '../calendarWeek/calendarWeek'
import CalendarMonth from '../calendarMonth/calendarMonth'


class CalendarPage extends Component {
  render() {
    const localizer = momentLocalizer(moment)
    const myEventsList = [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]

    const MyCalendar = props => (
      <div className='calendar-page'>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        // style={{ height: 500 }}
        />
      </div>
    )
    return (
      // MyCalendar()
      <div className='calendar'>
        <CalendarMonth />
      </div>
    )
  }
}

export default CalendarPage
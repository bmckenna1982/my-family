import React, { Component } from 'react'
import CalendarWeek from '../calendarWeek/calendarWeek'
import CalendarMonth from '../calendarMonth/calendarMonth'
import AddItemLink from '../addItemLink/addItemLink'
import { extractMonth } from '../utils/utils'
import AppContext from '../context/appContext'
import './calendar.css'
import EventsService from '../services/events-services'


class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMonth: false,

    }
  }

  static contextType = AppContext

  showMonth(showMonth) {
    this.setState({ showMonth })
  }
  render() {
    const calendarView = this.state.showMonth
      ? <CalendarMonth />
      : <CalendarWeek />

    return (
      <div className='calendar'>
        <header className='calendar-month' role='banner'>
          <h1>{extractMonth(new Date())}</h1>
        </header>
        <AddItemLink location='/add-event' itemName='Event' />
        <div className='tab-selection'>
          {/* instead of tab make it two divs one says view week one says view month
          each sets the close to the other view */}
          <button className={'bttn week-tab ' + (this.state.showMonth ? '' : 'active')} id='week-tab' onClick={() => this.showMonth(false)}>Week</button>
          <button className={'bttn month-tab ' + (this.state.showMonth ? 'active' : '')} id='month-tab' onClick={() => this.showMonth(true)}>Month</button>
        </div>
        <div className='calendar-wrapper'>
          {calendarView}
        </div>
      </div>
    )
  }
}

export default Calendar
import React, { Component } from 'react'
import CalendarWeek from '../calendarWeek/calendarWeek'
import CalendarMonth from '../calendarMonth/calendarMonth'
import AddItemLink from '../addItemLink/addItemLink'
import { extractMonth } from '../utils/utils'
import AppContext from '../context/appContext'
import './calendar.css'


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
        <header className='calendar-month'>
          <h1>{extractMonth(new Date())}</h1>
        </header>
        <AddItemLink location='/add-event' itemName='Event' />
        <div className='tab-selection'>
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
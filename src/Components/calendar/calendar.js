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

  componentDidMount() {
    EventsService.getEvents()
      .then(data => {
        this.context.setEvents(data)
      })
  }


  showMonth(showMonth) {
    console.log('showMonth', showMonth)
    this.setState({ showMonth })
  }
  render() {
    const calendarView = this.state.showMonth
      ? <CalendarMonth />
      : <CalendarWeek />

    return (
      <div className='calendar'>
        <header className='calendar-month' role='banner'>
          <h1>April</h1>
          <AddItemLink location='/add-event' itemName='Event' />
        </header>
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
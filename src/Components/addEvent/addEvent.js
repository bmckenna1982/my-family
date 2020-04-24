import React, { Component } from 'react'
import Header from '../header/header'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import AppContext from '../context/appContext'
import { nowHour, endHour } from '../utils/utils'
import './addEvent.css'

class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      startTime: nowHour(new Date()),
      endTime: endHour(new Date()),
      title: '',
    }

  }

  static contextType = AppContext

  handleTitleChange = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }
  handleDateChange = date => this.setState({ date })
  handleStartTimeChange = startTime => this.setState({ startTime })
  handleEndTimeChange = endTime => this.setState({ endTime })
  addEvent = (event) => {
    event.preventDefault()
    let e = this.state
    this.context.addEvent(e)
  }

  render() {
    return (
      <section className="addEvent">
        <Header pageTitle='Add Event' />
        <form className='addEvent-form' onSubmit={this.addEvent}>
          <div>
            <input type="text" name='title' id='title' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div>
            {/* <input type="event_date" name='event_date' id='event_date' placeholder='Date' /> */}
            <DatePicker onChange={this.handleDateChange} value={this.state.date} />
          </div>
          <div>
            <p>Start time</p>
            <TimePicker onChange={this.handleStartTimeChange} value={this.state.startTime} />
            {/* <input type="event-time" name='event-time' id='event-time' placeholder='Start time of event' /> */}
            <p>End time</p>
            <TimePicker onChange={this.handleEndTimeChange} value={this.state.endTime} />
            {/* <input type="event-end-time" name='event-end-time' id='event-end-time' placeholder='End time of event' /> */}
          </div>
          <button type='submit' >Add Event</button>

        </form>
      </section>
    )
  }
}

export default AddEvent
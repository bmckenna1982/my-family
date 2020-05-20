import React, { Component } from 'react'
import Header from '../header/header'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import AppContext from '../context/appContext'
import EventsService from '../services/events-services'
import { nowHour, endHour } from '../utils/utils'
import './addEvent.css'

class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event_date: new Date(),
      start_time: nowHour(new Date()),
      end_time: endHour(new Date()),
      title: '',
    }

  }

  static contextType = AppContext

  handleTitleChange = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }
  handleDateChange = event_date => this.setState({ event_date })
  handleStartTimeChange = start_time => this.setState({ start_time })
  handleEndTimeChange = end_time => this.setState({ end_time })
  // addEvent = (event) => {
  //   event.preventDefault()
  //   let e = this.state
  //   this.context.addEvent(e)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      ...this.state
    }
    EventsService.postEvent(newEvent)
      .then(res => {
        this.setState({ title: '' })
        this.context.addEvent(res)
        this.props.history.push('/home')
      })
  }


  render() {
    return (
      <section className="addEvent">
        <Header pageTitle='Add Event' />
        <form className='addEvent-form' onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name='title' id='title' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div>
            {/* <input type="event_date" name='event_date' id='event_date' placeholder='Date' /> */}
            <DatePicker onChange={this.handleDateChange} value={this.state.event_date} />
          </div>
          <div>
            <p>Start time</p>
            <TimePicker onChange={this.handleStartTimeChange} value={this.state.start_time} />
            {/* <input type="event-time" name='event-time' id='event-time' placeholder='Start time of event' /> */}
            <p>End time</p>
            <TimePicker onChange={this.handleEndTimeChange} value={this.state.end_time} />
            {/* <input type="event-end-time" name='event-end-time' id='event-end-time' placeholder='End time of event' /> */}
          </div>
          <button className='bttn' type='submit' >Add Event</button>

        </form>
      </section>
    )
  }
}

export default AddEvent
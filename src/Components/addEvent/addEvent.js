import React, { Component } from 'react'
import Header from '../header/header'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import './addEvent.css'

class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      startTime: '12:00',
      endTime: '1:00'

    }
  }

  handleDateChange = date => this.setState({ date })
  handleStartTimeChange = startTime => this.setState({ startTime })
  handleEndTimeChange = endTime => this.setState({ endTime })

  render() {
    return (
      <section className="addEvent">
        <Header pageTitle='Add Event' />
        <form className='addEvent-form' onSubmit={this.context.AddEvent}>
          <div>
            <input type="text" name='title' id='title' placeholder='Title' />
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
          <button type='submit'>Add Event</button>

        </form>
      </section>
    )
  }
}

export default AddEvent
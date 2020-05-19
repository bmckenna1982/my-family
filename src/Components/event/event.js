import React, { Component } from 'react'
import './event.css'

class Event extends Component {
  render() {
    return (
      <div className='event-container'>
        <div className='event-day'>{this.props.day} </div>
        <div className='event-time'>{this.props.time}</div>
        <div className='event-title'>{this.props.title}</div>
      </div>
      // <div className='events-next'>Wed 2pm Set Crock pot</div>
      // <div className='events-next'>Wed 6pm Baseball practice</div>
    )
  }
}

export default Event
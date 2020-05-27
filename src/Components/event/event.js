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
    )
  }
}

export default Event
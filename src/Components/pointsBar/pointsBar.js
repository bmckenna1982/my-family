import React, { Component } from 'react'

class PointsBar extends Component {
  render() {
    return (
      <div className='points-status-container'>
        <div className='points'>Point total: 130</div>
        <div className='leader'>Next tier: 200</div>
      </div>
    )
  }
}

export default PointsBar
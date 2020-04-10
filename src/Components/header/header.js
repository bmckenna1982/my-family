import React, { Component } from 'react'
import PointsBar from '../pointsBar/pointsBar'

class Header extends Component {
  render() {
    return (
      <header className='header' role='banner'>
        <h1>Daily Overview</h1>
        <PointsBar />
      </header>
    )
  }
}

export default Header
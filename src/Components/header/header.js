import React, { Component } from 'react'
import PointsBar from '../pointsBar/pointsBar'

class Header extends Component {
  render() {
    return (
      <header className='header' role='banner'>
        <h1>{this.props.pageTitle}</h1>
      </header>
    )
  }
}

export default Header
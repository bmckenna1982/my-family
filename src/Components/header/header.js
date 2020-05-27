import React, { Component } from 'react'

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
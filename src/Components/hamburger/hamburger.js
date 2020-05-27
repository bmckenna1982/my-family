import React, { Component } from 'react'
import './hamburger.css'

class Hamburger extends Component {
  render() {
    function changeNav(e) {
      e.preventDefault()
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav-list').classList.toggle('close')
    }

    return (
      <div className='hamburger' onClick={changeNav} id='hamburger'>
        <div className='nav-bar bar1'></div>
        <div className='nav-bar bar2'></div>
        <div className='nav-bar bar3'></div>
      </div>
    )
  }
}

export default Hamburger
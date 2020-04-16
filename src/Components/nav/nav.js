import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  render() {
    function changeNav(e) {
      e.preventDefault()
      // e.target.classList.toggle('open')
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav-list').classList.toggle('close')
    }
    return (
      <nav role='navigation' className='nav' >
        <ul className='nav-list close' id='nav-list'>
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/calendar'>Calendar</NavLink>
          </li>
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/tasks'>Tasks</NavLink>
          </li>
          <li className='nav-item'>Lists</li>
          <li className='nav-item'>Family</li>
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/log-in'>Log in</NavLink>
          </li>
        </ul>
        <div className='hamburger' onClick={changeNav} id='hamburger'>
          <div className='nav-bar bar1'></div>
          <div className='nav-bar bar2'></div>
          <div className='nav-bar bar3'></div>
        </div>
        <div className='app-name'>MyFamily</div>

      </nav>
    )
  }
}

export default Nav
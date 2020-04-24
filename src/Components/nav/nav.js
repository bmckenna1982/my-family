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
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/lists'>Lists</NavLink>
          </li>
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/family'>Family</NavLink>
          </li>
          <li className='nav-item' onClick={changeNav}>
            <NavLink to='/log-in'>Log in</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
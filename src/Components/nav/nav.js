import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  render() {
    function changeNav(e) {
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav-list').classList.toggle('close')
      // document.querySelector(e.target.value).classList.toggle('active')
    }
    return (
      <nav role='navigation' className='nav-list close' id='nav-list'>
        <NavLink onClick={changeNav} exact to='/'>Home</NavLink>

        <NavLink onClick={changeNav} to='/calendar'>Calendar</NavLink>

        <NavLink onClick={changeNav} to='/tasks'>Tasks</NavLink>

        <NavLink onClick={changeNav} to='/lists'>Lists</NavLink>

        <NavLink onClick={changeNav} to='/family'>Family</NavLink>
        <NavLink onClick={changeNav} to='/rewards'>Rewards</NavLink>

        <NavLink onClick={changeNav} to='/log-in'>Log in</NavLink>

      </nav>
    )
  }
}

export default Nav
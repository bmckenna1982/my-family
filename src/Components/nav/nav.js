import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  render() {
    function changeNav(e) {
      // e.preventDefault()
      console.log('e.target.id', e.target)
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav-list').classList.toggle('close')
      // document.querySelector(e.target.value).classList.toggle('active')
    }
    return (
      // <nav role='navigation' className='nav' >
      //   <ul className='nav-list close' id='nav-list'>
      //     <li className='nav-item' onClick={changeNav}>
      //       <NavLink exact to='/'>Home</NavLink>
      //     </li>
      //     <li className='nav-item' onClick={changeNav}>
      //       <NavLink to='/calendar'>Calendar</NavLink>
      //     </li>
      //     <li className='nav-item' onClick={changeNav}>
      //       <NavLink to='/tasks'>Tasks</NavLink>
      //     </li>
      //     <li className='nav-item' onClick={changeNav}>
      //       <NavLink to='/lists'>Lists</NavLink>
      //     </li>
      //     <li className='nav-item' onClick={changeNav}>
      //       <NavLink to='/family'>Family</NavLink>
      //     </li>
      //     <li className='nav-item' onClick={changeNav}>
      //       <NavLink to='/log-in'>Log in</NavLink>
      //     </li>
      //   </ul>
      // </nav>
      <nav role='navigation' className='nav-list close' id='nav-list'>
        <NavLink onClick={changeNav} exact to='/'>Home</NavLink>

        <NavLink onClick={changeNav} to='/calendar'>Calendar</NavLink>

        <NavLink onClick={changeNav} to='/tasks'>Tasks</NavLink>

        <NavLink onClick={changeNav} to='/lists'>Lists</NavLink>

        <NavLink onClick={changeNav} to='/family'>Family</NavLink>

        <NavLink onClick={changeNav} to='/log-in'>Log in</NavLink>

      </nav>
    )
  }
}

export default Nav
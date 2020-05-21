import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import TokenService from '../services/token-services'
import IdleService from "../services/idle-services";
import AppContext from '../context/appContext'
import './nav.css'


class Nav extends Component {

  static contextType = AppContext

  handleLogOut = () => {
    this.context.setCurrentUser('')
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
    this.changeNav()
  }

  changeNav = (e) => {
    document.querySelector('#hamburger').classList.toggle('open')
    document.querySelector('#nav-list').classList.toggle('close')
    // document.querySelector(e.target.value).classList.toggle('active')
  }

  render() {
    console.log('render Nav')
    return (
      <nav role='navigation' className='nav-list close' id='nav-list'>
        <NavLink onClick={this.changeNav} exact to='/home'>Home</NavLink>

        <NavLink onClick={this.changeNav} to='/calendar'>Calendar</NavLink>

        <NavLink onClick={this.changeNav} to='/tasks'>Tasks</NavLink>

        <NavLink onClick={this.changeNav} to='/lists'>Lists</NavLink>

        <NavLink onClick={this.changeNav} to='/family'>Family</NavLink>
        <NavLink onClick={this.changeNav} to='/rewards'>Rewards</NavLink>

        {(this.context.currentUser.family)
          ? <NavLink onClick={this.handleLogOut} exact to='/'>Log out</NavLink>
          : <NavLink onClick={this.changeNav} to='/log-in'>Log in</NavLink>}

      </nav>
    )
  }
}

export default Nav
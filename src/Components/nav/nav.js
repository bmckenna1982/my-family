import React, { Component } from "react";

class Nav extends Component {
  render() {
    function changeNav(e) {
      e.preventDefault()
      // e.target.classList.toggle('open')
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav_list').classList.toggle('close')
    }
    return (
      <nav role='navigation' className='nav' >
        <ul className='nav_list close' id='nav_list'>
          <li className='nav_item'>Home</li>
          <li className='nav_item'>Calendar</li>
          <li className='nav_item'>Tasks</li>
          <li className='nav_item'>Shopping Lists</li>
          <li className='nav_item'>Family</li>
        </ul>
        <div className='hamburger' onClick={changeNav} id='hamburger'>
          <div className='nav_bar bar1'></div>
          <div className='nav_bar bar2'></div>
          <div className='nav_bar bar3'></div>
        </div>
        <div className='app_name'>MyFamily</div>

      </nav>
    )
  }
}

export default Nav
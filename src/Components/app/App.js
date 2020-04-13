import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Header from '../header/header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <main role='main'>
          <Header />
          <UpcomingEvents />
          <UpcomingTasks />
          <LatestLists />
        </main>
        <footer role='contentinfo'>Footer</footer>
      </div>
    );
  }
}

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

class UpcomingEvents extends Component {
  render() {
    return (
      <section className='upcoming-events'>
        <h2>Upcoming Events</h2>
        <div className='calendar-link'>
          <a href='/calendar'>View Calendar</a>
        </div>
        <Event day='Today' time='3pm' title='Baseball practice' />
        <Event day='Wed 14' time='3pm' title='Baseball practice' />
      </section>
    )
  }
}

class Event extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='event-container'>
        <div className='event-day'>{this.props.day}</div>
        <div className='event-time'>{this.props.time}</div>
        <div className='event-title'>{this.props.title}</div>
      </div>
      // <div className='events-next'>Wed 2pm Set Crock pot</div>
      // <div className='events-next'>Wed 6pm Baseball practice</div>
    )
  }
}


class UpcomingTasks extends Component {
  render() {
    return (
      <section className='upcoming-tasks'>
        <h2>Upcoming Tasks</h2>
        <div className='tasks-container'>
          <Task title='Take out trash' points='20' />
          <Task title='Put away laundry' points='20' />
          <Task title='Bathe Dogs' points='100' />
          <Task title='Mow the lawn' points='50' />
        </div>
        <div className='tasks'></div>
        <div className='tasks'></div>
      </section>
    )
  }
}

class Task extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='task'>
        <TaskCheck />
        <div className='task_desc'>
          <div className='task_title'>{this.props.title}</div>
          {/* <div className='dueDate'>Due: TODAY</div> */}
          <div className='point_value'>{this.props.points}pts</div>
        </div>
      </div>
    )
  }
}


class TaskCheck extends Component {
  render() {
    return (
      <input className='taskCheck' type='checkbox' name='task1' id='task1' />

    )
  }
}

class LatestLists extends Component {
  render() {
    return (
      <section className='activeList'>
        <h2>Active Lists</h2>
        <div className='groceryList'>Groceries</div>
        <div className='shoppingList'>Shopping</div>
      </section>
    )
  }
}


export default withRouter(App);

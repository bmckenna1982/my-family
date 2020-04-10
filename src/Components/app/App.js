import React, { Component } from 'react';
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
      <section >
        <h2>Upcoming Events</h2>
        <Event />
        <Event />
      </section>
    )
  }
}

class Event extends Component {
  render() {
    return (
      <div className='events-container'>
        <div className='events-today'>Today 3pm Baseball practice</div>
        <hr />
        <div className='events-next'>Wed 2pm Set Crock pot</div>
        <div className='events-next'>Wed 6pm Baseball practice</div>
      </div>
    )
  }
}


class UpcomingTasks extends Component {
  render() {
    return (
      <section >
        <h2>Upcoming Tasks</h2>
        <div className='tasks-container'>
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <div className='tasks'></div>
        <div className='tasks'></div>
      </section>
    )
  }
}

class Task extends Component {
  render() {
    return (
      <div className='task'>
        <div className='task_desc'>
          <div className='task_title'>Take out trash</div>
          <div className='point_value'>20pts</div>
        </div>
        <div className='dueDate'>Due: TODAY</div>
      </div>
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


export default App;

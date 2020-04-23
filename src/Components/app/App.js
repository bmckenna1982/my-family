import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import moment from 'moment'
import Nav from '../nav/nav'
import HomePage from '../homePage/homePage'
import Login from '../login/login'
import Register from '../register/register'
import Calendar from '../calendar/calendar'
import TasksPage from '../tasksPage/tasksPage'
import ListPage from '../listsPage/listsPage'
import FamilyPage from '../familyPage/familyPage'
import AddEvent from '../addEvent/addEvent'
import AppContext from '../context/appContext'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      tasks: [],
      lists: [],
      date: moment([]),
      navOpen: false
    }
  }

  static contextType = AppContext

  handleDateChange = (date) => {
    this.setState({ date })
  }

  addEvent = (event) => {
    this.state.push({
      title: event.title,
      date: event.date,
      startTime: event.startTime,
      endTime: event.endTime,
    })
  }

  render() {
    const contextValue = {
      events: this.state.events,
      tasks: this.state.tasks,
      lists: this.state.lists,
      date: this.state.date,
      navOpen: this.state.navOpen,
      addEvent: this.addEvent
    }

    return (
      <AppContext.Provider value={contextValue}>
        <div className="App">
          <Nav />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/log-in' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/tasks' component={TasksPage} />
              <Route exact path='/lists' component={ListPage} />
              <Route exact path='/family' component={FamilyPage} />
              <Route exact path='/add-event' component={AddEvent} />
            </Switch>
          </main>
          <footer role='contentinfo'>Footer</footer>
        </div>
      </AppContext.Provider>
    );
  }
}

export default withRouter(App);

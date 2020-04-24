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
import AddTask from '../addTask/addTask'
import AppContext from '../context/appContext'
import { extractWeekday, extractDayOfMonth } from '../utils/utils'
import dataStore from '../../data/dataStore'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        {
          title: 'Event Title',
          date: 'Wed 14',
          startTime: '3pm',
          endTime: '4:30pm',
        }
      ],
      tasks: [
        {
          title: 'task title',
          points: '20'
        }
      ],
      lists: [
        {
          title: 'list title',
          items: []
        }
      ],
      date: moment([]),
      navOpen: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState(dataStore), 600)
  }

  static contextType = AppContext

  handleDateChange = (date) => {
    this.setState({ date })
  }

  addEvent = (event) => {
    // event.preventDefault()
    const weekday = extractWeekday(event.date)
    const dayOfMonth = extractDayOfMonth(event.date)
    console.log('day', dayOfMonth)
    console.log('event.target', event)
    console.log('...this.state.events', ...this.state.events)
    this.setState({
      events: [
        ...this.state.events,
        {
          title: event.title,
          date: `${weekday} ${dayOfMonth}`,
          startTime: event.startTime,
          endTime: event.endTime
        }
      ]
    })
    this.props.history.push('/')
  }

  addTask = task => {
    console.log('task', task)
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: task.title,
          points: task.points
        }
      ]
    })
    this.props.history.goBack()
  }

  render() {
    const contextValue = {
      events: this.state.events,
      tasks: this.state.tasks,
      lists: this.state.lists,
      date: this.state.date,
      navOpen: this.state.navOpen,
      addEvent: this.addEvent,
      addTask: this.addTask
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
              <Route exact path='/add-task' component={AddTask} />
            </Switch>
          </main>
          <footer role='contentinfo'>Footer</footer>
        </div>
      </AppContext.Provider>
    );
  }
}

export default withRouter(App);

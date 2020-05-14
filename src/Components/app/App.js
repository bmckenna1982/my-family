import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import moment from 'moment'

import TopBar from '../topBar/topBar'
import Hamburger from '../hamburger/hamburger'
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
import Rewards from '../rewards/rewards'
import AddReward from '../addReward/addReward'
import EditTask from '../editTask/editTask'

import AppContext from '../context/appContext'
import { extractWeekday, extractDayOfMonth } from '../utils/utils'
import dataStore from '../../data/dataStore'
import './App.css'




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        {
          title: 'Event Title',
          event_date: new Date(),
          start_time: '15:00',
          end_time: '16:30',
        }
      ],
      tasks: [
        // {
        //   title: '',
        //   points: ''
        // }
      ],
      rewards: [
        {
          title: 'reward title',
          points: '200'
        }
      ],
      lists: [],
      date: moment([]),
      navOpen: false,
      showEdit: false,
      selectedTaskIndex: null,
    }
  }

  componentDidMount() {
    // setTimeout(() => this.setState(dataStore), 600)

  }

  static contextType = AppContext

  handleDateChange = (event_date) => {
    this.setState({ event_date })
  }

  addEvent = (event) => {
    // event.preventDefault()
    const weekday = extractWeekday(event.event_date)
    const dayOfMonth = extractDayOfMonth(event.event_date)
    console.log('day', dayOfMonth)
    console.log('event.target', event)
    console.log('...this.state.events', ...this.state.events)
    this.setState({
      events: [
        ...this.state.events,
        {
          title: event.title,
          event_date: event.event_date,
          start_time: event.start_time,
          end_time: event.end_time
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

  addReward = reward => {
    console.log('reward', reward)
    this.setState({
      rewards: [
        ...this.state.rewards,
        {
          title: reward.title,
          points: reward.points
        }
      ]
    })
    this.props.history.goBack()
  }

  addToList = (listName, newItem) => {
    console.log('newItem', newItem)
    console.log('this.state.lists', this.state.lists)
    const updatedLists = this.state.lists.map(list => {
      console.log('list', list)
      console.log('listName', listName)
      if (list.name === listName && newItem !== '') {
        list.items.push({
          checked: false,
          itemName: newItem
        })
      }
      list.open = false
      return list
    })
    console.log('updatedLists', updatedLists)
    this.setState({
      lists: [
        ...updatedLists
      ]
    })
  }

  toggleListOpen = index => {
    // index.preventDefault()
    console.log('index', index)
    const listStatus = this.state.lists.map((list, i) => {
      console.log('list', list)
      if (i === index) {
        list.open = !list.open
      } else {
        list.open = false
      }

      return list
    })
    this.setState({
      lists: listStatus
    })
  }

  openEdit = (click) => {
    console.log('clicked edit', click.props)
    this.setState({
      showEdit: true,
      selectedTaskIndex: click.props.index
    })
  }

  setTasks = (data) => {
    console.log('state-data', data)
    this.setState({
      tasks: [...data]
    })
  }

  setLists = (data) => {
    console.log('lists-data', data)
    this.setState({
      lists: [...data]
    })
  }

  addList = (data) => {
    console.log('data', data)
    this.setState({
      lists: [
        ...this.state.lists,
        data
      ]
    })
  }

  render() {
    const contextValue = {
      events: this.state.events,
      tasks: this.state.tasks,
      lists: this.state.lists,
      date: this.state.date,
      navOpen: this.state.navOpen,
      showEdit: this.state.showModal,
      selectedTaskIndex: this.state.selectedTaskIndex,
      addEvent: this.addEvent,
      addTask: this.addTask,
      setTasks: this.setTasks,
      toggleListOpen: this.toggleListOpen,
      addToList: this.addToList,
      addList: this.addList,
      setLists: this.setLists,
      addReward: this.addReward,
      openEdit: this.openEdit
    }

    return (
      <AppContext.Provider value={contextValue}>
        <div className="App">
          <TopBar />
          <Hamburger />
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
              <Route exact path='/rewards' component={Rewards} />
              <Route exact path='/add-event' component={AddEvent} />
              <Route exact path='/add-task' component={AddTask} />
              <Route exact path='/add-reward' component={AddReward} />
              <Route exact path='/edit-task' component={EditTask} />
            </Switch>
          </main>
          <footer role='contentinfo'>Footer</footer>
        </div>
      </AppContext.Provider>
    );
  }
}

export default withRouter(App);

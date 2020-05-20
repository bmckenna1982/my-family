import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import moment from 'moment'
import PrivateRoute from '../utils/PrivateRoute';
import PublicOnlyRoute from '../utils/PublicOnlyRoute';

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
import LandingPage from '../landingPage/landingPage'
import TokenService from '../services/token-services';
import AuthApiService from '../services/auth-api-services';
import IdleService from '../services/idle-services';
import './App.css';

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
      tasks: [],
      rewards: [
        {
          title: 'reward title',
          points: '200'
        }
      ],
      lists: [],
      listItems: [],
      date: moment([]),
      navOpen: false,
      showEdit: false,
      selectedTaskIndex: null,
      currentUser: {},
      members: []
    }
  }

  static contextType = AppContext

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    console.log('mounted')
    if (TokenService.hasAuthToken()) {
      console.log('auth passed')
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  handleDateChange = (event_date) => {
    this.setState({ event_date })
  }

  addEvent = (event) => {
    // event.preventDefault()
    const weekday = extractWeekday(event.event_date)
    const dayOfMonth = extractDayOfMonth(event.event_date)
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

  setEvents = (events) => {
    this.setState({
      events: [...events]
    })
  }

  addTask = task => {
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

  addListItem = (newItem) => {
    this.setState({
      listItems: [
        ...this.state.listItems,
        newItem
      ]
    })
  }

  toggleListOpen = index => {
    const listStatus = this.state.lists.map((list, i) => {
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
    this.setState({
      showEdit: true,
      selectedTaskIndex: click.props.index
    })
  }

  setTasks = (data) => {
    this.setState({
      tasks: [...data]
    })
  }

  setLists = (data) => {
    this.setState({
      lists: [...data]
    })
  }

  setListItems = (data) => {
    this.setState({
      listItems: [
        ...data,

      ]
    })
  }

  addList = (data) => {
    this.setState({
      lists: [
        ...this.state.lists,
        data
      ]
    })
  }

  setCurrentUser = (data) => {
    console.log('data', data)
    this.setState({
      currentUser: { ...data }
    })
  }

  setMembers = (data) => {
    this.setState({
      members: [...data]
    })
  }

  render() {
    const contextValue = {
      events: this.state.events,
      tasks: this.state.tasks,
      lists: this.state.lists,
      listItems: this.state.listItems,
      date: this.state.date,
      navOpen: this.state.navOpen,
      showEdit: this.state.showModal,
      selectedTaskIndex: this.state.selectedTaskIndex,
      currentUser: this.state.currentUser,
      members: this.state.members,
      addEvent: this.addEvent,
      setEvents: this.setEvents,
      addTask: this.addTask,
      setTasks: this.setTasks,
      toggleListOpen: this.toggleListOpen,
      addListItem: this.addListItem,
      addList: this.addList,
      setLists: this.setLists,
      setListItems: this.setListItems,
      addReward: this.addReward,
      openEdit: this.openEdit,
      setCurrentUser: this.setCurrentUser,
      setMembers: this.setMembers,
    }

    return (
      <AppContext.Provider value={contextValue} >
        <div className="App">
          <TopBar />
          <Hamburger />
          <Nav />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <PrivateRoute exact path='/home' component={HomePage} />
              <PublicOnlyRoute exact path='/log-in' component={Login} />
              <PublicOnlyRoute exact path='/register' component={Register} />
              <PrivateRoute exact path='/calendar' component={Calendar} />
              <PrivateRoute exact path='/tasks' component={TasksPage} />
              <PrivateRoute exact path='/lists' component={ListPage} />
              <PrivateRoute exact path='/family' component={FamilyPage} />
              <PrivateRoute exact path='/rewards' component={Rewards} />
              <PrivateRoute exact path='/add-event' component={AddEvent} />
              <PrivateRoute exact path='/add-task' component={AddTask} />
              <PrivateRoute exact path='/add-reward' component={AddReward} />
              {/* <PrivateRoute exact path='/edit-task' component={EditTask} /> */}
            </Switch>
          </main>
          <footer role='contentinfo'>Footer</footer>
        </div>
      </AppContext.Provider >
    );
  }
}

export default withRouter(App);

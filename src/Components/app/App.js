import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import Nav from '../nav/nav'
import HomePage from '../homePage/homePage'
import Login from '../login/login'
import Register from '../register/register'
import Calendar from '../calendar/calendar'
import TasksPage from '../tasksPage/tasksPage'
import ListPage from '../listsPage/listsPage'
import FamilyPage from '../familyPage/familyPage'
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
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/log-in' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/tasks' component={TasksPage} />
            <Route exact path='/lists' component={ListPage} />
            <Route exact path='/family' component={FamilyPage} />
          </Switch>
        </main>
        <footer role='contentinfo'>Footer</footer>
      </div>
    );
  }
}

export default withRouter(App);

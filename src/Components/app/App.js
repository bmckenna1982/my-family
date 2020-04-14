import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Nav from '../nav/nav'
import Header from '../header/header'
import UpcomingEvents from '../upcomingEvents/upcomingEvents'
import UpcomingTasks from '../upcomingTasks/upcomingTasks'
import LatestLists from '../latestLists/latestLists'
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

export default withRouter(App);

import React, { Component } from 'react'
import Header from '../header/header'
import List from '../list/list'
import AddList from '../addList/addList'
import ListInput from '../listInput/listInput'
import AppContext from '../context/appContext'
import ListsService from '../services/lists-service'
import './listsPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ListItemsService from '../services/listItems-service'

class ListsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createOpen: false
    }
  }
  static contextType = AppContext

  componentDidMount() {
    ListsService.getAllLists()
      .then(data => {
        this.context.setLists(data)
      })
      .catch(err => {
        this.setState({
          error: `Couldn't get lists data at this time`
        })
      })

    ListItemsService.getAllListItems()
      .then(data => {
        this.context.setListItems(data)
      })
      .catch(err => {
        this.setState({
          error: `Couldn't get list items data at this time`
        })
      })
  }

  renderLists = () => {
    const listsDisplay = this.context.lists[0]
      ? this.context.lists.map((list, index) =>
        (
          <section className='list-container' key={index}>
            <h2 className='list-name'>{list.title}</h2>
            <ListInput list={list} />
            <List key={list.title} list={list} />
          </section>
        ))
      : ''
    return listsDisplay
  }

  renderCreateList = () => {
    const createListDisplay = this.state.createOpen
      ? <AddList callBack={(newItem) => this.context.addList(newItem)} placeholder='New List Title' />
      : ''
    return createListDisplay
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      createOpen: !this.state.createOpen
    })
  }

  render() {
    return (
      <div className='Shopping Lists'>
        <Header pageTitle='Shopping Lists' />
        <div className='icon-plus' onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPlus} />
          Create List
        </div>

        {this.renderCreateList()}
        {this.renderLists()}
      </div>
    )
  }
}

export default ListsPage
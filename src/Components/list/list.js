import React, { Component } from 'react'
import ListCheck from '../listCheck/listCheck'
import ListInput from '../listInput/listInput'
import AppContext from '../context/appContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './list.css'
import ListItemsService from '../services/listItems-service'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        {
          id: null,
          listItems: [],
        }
      ],
      id: null,
      listItems: [],
      // listItems: [],
      open: false
    }
  }

  static contextType = AppContext

  // componentDidMount() {
  //   //get all the list items for this list
  //   ListItemsService.getAllListItems(this.props.list.id)
  //     .then(data => {
  //       const newLists = data.map(list =>
  //         list.id === this.props.list.id
  //           ? { ...list, listItems: data }
  //           : list
  //       )
  //       console.log('newLists', newLists)

  //       return (this.setState({
  //         lists: newLists
  //         // listItems: [
  //         //   ...this.state.listItems,
  //         //   ...data
  //         // ]
  //       })
  //       )
  //     })
  // }

  renderList = () => {
    console.log('this.state.listItems', this.state.lists.listItems)
    console.log('this.state.listItems', this.props.list)
    const currentListItems = this.context.listItems.filter(item => item.list_id === this.props.list.id) || null
    const renderDisplay = currentListItems
      ? currentListItems.map((item, index) => (
        <div className='list-item-container' key={item.id}>
          <ListCheck checked={item.checked} listItemId={item.id} />
          <div className='list-item'>{item.title}</div>
        </div>
      ))
      : ''
    console.log('renderDisplay', renderDisplay)
    return renderDisplay
  }

  render() {
    return (
      // <div>{this.props.list.title}</div>
      <div className={'list-container ' + (this.state.open ? 'open' : '')}>
        {this.renderList()}
      </div>
    )
  }
}

export default List
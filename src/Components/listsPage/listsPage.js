import React, { Component } from 'react'
import Header from '../header/header'
import List from '../list/list'
import TaskCheck from '../taskCheck/taskCheck'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'
import './listsPage.css'

class ListsPage extends Component {
  static contextType = AppContext
  // static defaultProps = {
  //   lists: [
  //     {
  //       name: 'Groceries',
  //       items: [
  //         {
  //           itemName: 'Milk',
  //           checked: false
  //         },
  //         {
  //           itemName: 'Yogurt',
  //           checked: false
  //         },
  //         {
  //           itemName: 'Swiss Cheese',
  //           checked: false
  //         },
  //         {
  //           itemName: 'Coffee Creamer',
  //           checked: true
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Home Improvement',
  //       items: [
  //         {
  //           itemName: 'Garden Edging',
  //           checked: false
  //         },
  //         {
  //           itemName: 'Mulch',
  //           checked: false
  //         },
  //         {
  //           itemName: 'PVC Primer',
  //           checked: true
  //         },
  //         {
  //           itemName: 'Sprinkler controller',
  //           checked: true
  //         },
  //       ]
  //     }
  //   ],

  // }

  render() {
    return (
      <div className='Shopping Lists'>
        <Header pageTitle='Shopping Lists' />
        {this.context.lists.map((list, index) =>
          (
            <section className='list-container' key={index}>
              <h2>{list.name}</h2>
              <AddItemLink itemName='Item' />
              {list.items.map((item, index) => (
                <div className='list-item-container' key={item.itemName}>
                  <TaskCheck checked={item.checked} />
                  <div className='list-item'>{item.itemName}</div>
                </div>
              ))}
              {/* <List /> */}
            </section>
          ))
        }
      </div>
    )
  }
}

export default ListsPage
import React, { Component } from 'react'
import Header from '../header/header'
import List from '../list/list'
import TaskCheck from '../taskCheck/taskCheck'
import AddItem from '../addItem/addItem'
import './listsPage.css'

class ListsPage extends Component {
  static defaultProps = {
    lists: [
      {
        name: 'Groceries',
        items: [
          {
            itemName: 'Milk',
            checked: false
          },
          {
            itemName: 'Yogurt',
            checked: false
          },
          {
            itemName: 'Swiss Cheese',
            checked: false
          },
          {
            itemName: 'Coffee Creamer',
            checked: true
          }
        ]
      },
      {
        name: 'Home Improvement',
        items: [
          {
            itemName: 'Garden Edging',
            checked: false
          },
          {
            itemName: 'Mulch',
            checked: false
          },
          {
            itemName: 'PVC Primer',
            checked: true
          },
          {
            itemName: 'Sprinkler controller',
            checked: true
          },
        ]
      }
    ],

  }

  render() {
    return (
      <div className='Shopping Lists'>
        <Header pageTitle='Shopping Lists' />
        {this.props.lists.map(list =>
          (
            <section className='list-container' key={list.name}>
              <h2>{list.name}</h2>
              <AddItem itemName='Item' />
              {list.items.map(item => (
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
import React, { Component } from 'react'
import Header from '../header/header'
import './familyPage.css'
import UsersService from '../services/users-service'

class FamilyPage extends Component {
  static defaultProps = {
    members: ['Brian', 'Keean'],
    events: [
      {
        member: 'Brian',
        desc: 'Scoop poo',
        value: 10
      },
      {
        member: 'Keean',
        desc: 'Put laundry away',
        value: 10
      },
      {
        member: 'Brian',
        desc: 'Mow lawn',
        value: 30
      },
      {
        member: 'Keean',
        desc: 'Vacumn Bedroom',
        value: 10
      },
      {
        member: 'Keean',
        desc: 'Take out trash',
        value: 10
      },
      {
        member: 'Keean',
        desc: 'Laundry',
        value: 20
      },

    ]
  }

  componentDidMount() {
    UsersService.getAllUsers()
      .then(res => {
        console.log('res', res)
      })
  }
  // getSum = (total, num) => {
  //   return total + Math.round(num)
  // }

  getPointTotal = (member) => {
    // let memberTotal = this.props.events.reduce((prev, curr) => prev + curr.value, 0)
    let memberTotal = this.props.events.reduce((prev, curr) => {
      if (curr.member === member) {
        return prev + curr.value
      } else {
        return prev
      }
    }, 0
    )
    return memberTotal
  }

  render() {
    return (
      <div className='family-page'>
        <Header pageTitle='Family Page' />
        {this.props.members.map(member => (
          <div className='family-member first-place' key={member}>
            <div className='member-container'>
              <div className='member-image-container'>
                <img className='member-image' src='https://my-family-app.s3.us-east-2.amazonaws.com/family-boy.svg' alt='cartoon boy' />
              </div>
              <div className='member-name'>{member}</div>
              <div className='points-total'>{this.getPointTotal(member)}</div>
            </div>
            <div className='points-history'>
              {this.props.events.filter(event => event.member === member).map((item, index) =>
                <div className='points-event' key={index}>
                  <div className='event-desc'>{item.desc}</div>
                  <div className='event-value'>{item.value}</div>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default FamilyPage
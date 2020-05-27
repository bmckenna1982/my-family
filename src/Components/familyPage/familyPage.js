import React, { Component } from 'react'
import Header from '../header/header'
import CompletedTasksList from '../completedTasksList/completedTasksList'
import './familyPage.css'
import UsersService from '../services/users-service'
import AppContext from '../context/appContext'

class FamilyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      events: []
    }
  }

  static contextType = AppContext
  // static defaultProps = {
  //   members: ['Brian', 'Keean'],
  //   events: [
  //     {
  //       member: 'Brian',
  //       desc: 'Scoop poo',
  //       value: 10
  //     },
  //     {
  //       member: 'Keean',
  //       desc: 'Put laundry away',
  //       value: 10
  //     },
  //     {
  //       member: 'Brian',
  //       desc: 'Mow lawn',
  //       value: 30
  //     },
  //     {
  //       member: 'Keean',
  //       desc: 'Vacumn Bedroom',
  //       value: 10
  //     },
  //     {
  //       member: 'Keean',
  //       desc: 'Take out trash',
  //       value: 10
  //     },
  //     {
  //       member: 'Keean',
  //       desc: 'Laundry',
  //       value: 20
  //     },

  //   ]
  // }

  componentDidMount() {
    UsersService.getAllUsers()
      .then(res => {
        // this.context.setMembers(res)
        this.setState({
          members: [...res]
        })
      })
  }
  // getSum = (total, num) => {
  //   return total + Math.round(num)
  // }

  // getPointTotal = (member) => {
  //   // let memberTotal = this.props.events.reduce((prev, curr) => prev + curr.value, 0)
  //   let memberTotal = this.context.events.reduce((prev, curr) => {
  //     if (curr.member === member) {
  //       return prev + curr.value
  //     } else {
  //       return prev
  //     }
  //   }, 0
  //   )
  //   return memberTotal
  // }

  render() {
    console.log('this.context.members', this.state.members)
    return (
      <div className='family-page'>
        <Header pageTitle='Family Leaders' />
        {this.state.members.map((member, index) => (
          <section className='family-member' key={index}>
            <div className='member-container'>
              <div className='member-image-container'>
                <img className='member-image' src='https://my-family-app.s3.us-east-2.amazonaws.com/family-boy.svg' alt='cartoon boy' />
              </div>
              <div className='member-name'>{member.first_name}</div>
              <div className='points-total'>{member.points || 0}</div>
            </div>
            <CompletedTasksList member={member.id} />
            {/* <div className='points-history'>
              {this.state.events.filter(event => event.member.id === member.id).map((item, index) =>
                <div className='points-event' key={index}>
                  <div className='event-desc'>{item.desc}</div>
                  <div className='event-value'>{item.value}</div>
                </div>
              )}
            </div> */}
          </section>
        ))}

      </div>
    )
  }
}

export default FamilyPage
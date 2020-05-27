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

  componentDidMount() {
    UsersService.getAllUsers()
      .then(res => {
        this.setState({
          members: [...res]
        })
      })
  }

  render() {
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
          </section>
        ))}

      </div>
    )
  }
}

export default FamilyPage
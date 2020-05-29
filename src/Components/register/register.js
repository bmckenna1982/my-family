import React, { Component } from 'react'
import './register.css'
import AuthApiService from '../services/auth-api-services'
import FamilyService from '../services/family-services';

class Register extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  };

  state = {
    error: null,
    newFamily: false,
    family: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/log-in')
  }

  handleChange = () => {
    this.setState({
      newFamily: !this.state.newFamily
    })
  }

  handleTextInputChange = (e) => {
    const field = e.target.id
    this.setState({
      [field]: e.target.value
    })
  }

  familyNameInUse = (name) => {
    return !!this.state.families.filter(family => family.family_name = name)
  }

  handleSubmit = ev => {
    ev.preventDefault()

    const { first_name, last_name, email, password, confirm_password, family } = ev.target
    console.log('password', password)
    console.log('confirm_password', confirm_password)
    if (password.value !== confirm_password.value) {
      console.log('no match')
      this.setState({ error: { message: 'Password confirmation does not match' } })
      return
    }
    let newUser = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value.toLowerCase(),
      password: password.value,
      family: family.value
    }
    this.setState({ error: null })
    if (this.state.newFamily) {
      FamilyService.postFamily({ family_name: newUser.family })
        .then(res =>
          res.newUser = { ...newUser, family: res.id }
        )
        .then(res => {
          if (!res) {
            return res.status(404).json({
              error: { message: `Family already exists` }
            })
          }
          AuthApiService.postUser(res)
            .then(user => {
              first_name.value = ''
              last_name.value = ''
              email.value = ''
              password.value = ''
              family.value = ''
              this.handleRegistrationSuccess()
            })
            .catch(err => {
              this.setState({ error: err.error })
            })
        })
        .catch(err => {
          this.setState({ error: err.error })
        })
    } else {
      FamilyService.getAllFamilies()
        .then(res => {
          res.family = res.filter(family => family.family_name === newUser.family)[0]
          return res
        }
        )
        .then(res => {
          if (!res.family) {
            throw new Error('Family does not exist')
          }
          newUser = { ...newUser, family: res.family.id }
          AuthApiService.postUser(newUser)
            .then(user => {
              first_name.value = ''
              last_name.value = ''
              email.value = ''
              password.value = ''
              family.value = ''
              this.handleRegistrationSuccess()
            })
            .catch(err => {
              this.setState({ error: { message: err.error } })
            })
        })
        .catch(err => {
          this.setState({ error: { message: 'Family does not exist' } })
        })
    }
  }

  render() {
    const { error } = this.state;
    return (
      <section className='registration'>
        <form className='register-form' onSubmit={this.handleSubmit}>
          <div role='alert'>{error && <p className='red'>{error.message}</p>}</div>
          <div>
            <input type='checkbox' name='create-checkbox' id='create-checkbox' onChange={this.handleChange} checked={this.state.newFamily} />
            <label htmlFor='create-checkbox'>I'm creating a new family account</label>
          </div>
          <div>
            <input placeholder='First Name' type='text' name='first_name' id='first_name' onChange={this.handleTextInputChange} value={this.state.first_name} required />
          </div>
          <div>
            <input type='text' name='last_name' id='last_name' placeholder='Last Name' onChange={this.handleTextInputChange} value={this.state.last_name} required />
          </div>
          <div>
            <input type='text' name='email' id='email' placeholder='Email' onChange={this.handleTextInputChange} value={this.state.email} required />
          </div>
          <div>
            <input type='password' name='password' id='password' placeholder='Password' onChange={this.handleTextInputChange} value={this.state.password} required />
          </div>
          <div>
            <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Password' onChange={this.handleTextInputChange} value={this.state.confirm_password} required />
          </div>
          <div>
            <input type='text' name='family' id='family' placeholder='Family Code' onChange={this.handleTextInputChange} value={this.state.family} required />
          </div>
          <button className='bttn' type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}

export default Register
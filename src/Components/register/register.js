import React, { Component } from 'react'
import './register.css'
import AuthApiService from '../services/auth-api-services'
class Register extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  };

  state = { error: null };

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/log-in')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, last_name, email, password, family } = ev.target

    this.setState({ error: null })

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value.toLowerCase(),
      password: password.value,
      family: family.value
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        password.value = ''
        family.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    return (
      <section className="registration">
        <form className='register-form' onSubmit={this.handleSubmit}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          {/* <legend>Register using your family code</legend> */}
          <div>
            <input type="checkbox" name='create-checkbox' id='create-checkbox' />
            <label htmlFor="create-checkbox">I'm creating a new family account</label>
          </div>
          <div>
            {/* <label for="first-name">First name</label> */}
            <input placeholder='First Name' type="text" name='first_name' id='first_name' />
          </div>
          <div>
            {/* <label for="last-name">Last name</label> */}
            <input type="text" name='last_name' id='last_name' placeholder='Last Name' />
          </div>
          <div>
            {/* <label for="username">Email</label> */}
            <input type="text" name='email' id='email' placeholder='Email' />
          </div>
          <div>
            {/* <label for="password">Password</label> */}
            <input type="password" name='password' id='password' placeholder='Password' />
          </div>
          <div>
            {/* <label for="password">Password</label> */}
            <input type="password" name='confirm-password' id='confirm-password' placeholder='Confrim Password' />
          </div>
          <div>
            {/* <label for="teamcode">Family Code</label> */}
            <input type="text" name='family' id='family' placeholder='Family Code' />
          </div>
          <button className='bttn' type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}

export default Register
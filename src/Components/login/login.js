import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  };

  state = { error: null };

  render() {
    const { error } = this.state;
    return (
      <section className='log-in background-section'>
        <p>To Demo the app login with user: demo@demo.com and password: Demo123!</p>
        <form className='log-in-form'>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <legend>Log in to your account</legend>
          <div>
            {/* <label htmlFor='user-name'>Email</label> */}
            <input type='text' name='username' id='username' placeholder='Email' />
          </div>
          <div>
            {/* <label htmlFor='password'>Password</label> */}
            <input type='password' name='password' id='password' placeholder='Password' />
          </div>
          <button className='bttn' type='submit'>Log in</button>
          <div>
            Register for an account here:
            <NavLink to='/register'>Register</NavLink>
          </div>
        </form>
      </section>
    );
  }
}

export default Login
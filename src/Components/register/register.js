import React, { Component } from 'react'
import './register.css'

class Register extends Component {
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
      <section className="registration">
        <form className='register-form'>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          {/* <legend>Register using your family code</legend> */}
          <div>
            <input type="checkbox" name='create-checkbox' id='create-checkbox' />
            <label htmlFor="create-checkbox">I'm creating a new family account</label>
          </div>
          <div>
            {/* <label for="first-name">First name</label> */}
            <input placeholder='First Name' type="text" name='first-name' id='first-name' />
          </div>
          <div>
            {/* <label for="last-name">Last name</label> */}
            <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
          </div>
          <div>
            {/* <label for="username">Email</label> */}
            <input type="text" name='username' id='username' placeholder='Email' />
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
            <input type="family-code" name='family-code' id='family-code' placeholder='Family Code' />
          </div>
          <button className='bttn' type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}

export default Register
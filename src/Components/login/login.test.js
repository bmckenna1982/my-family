import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
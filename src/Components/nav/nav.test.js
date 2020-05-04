import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Nav from './nav';

describe('Nav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter>
      <Nav />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
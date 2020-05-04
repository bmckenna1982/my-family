import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddEvent from './addEvent';

describe('AddEvent component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddEvent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })


})
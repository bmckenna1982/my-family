import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Task from './task';

describe('Task component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Task />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
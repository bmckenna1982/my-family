import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Task from './task';

describe('Task component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter>
      <Task />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
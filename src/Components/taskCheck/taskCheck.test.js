import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import TaskCheck from './taskCheck';

describe('TaskCheck component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter>
      <TaskCheck />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
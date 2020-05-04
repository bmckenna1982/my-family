import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TaskCheck from './taskCheck';

describe('TaskCheck component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TaskCheck />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
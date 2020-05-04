import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Rewards from './rewards';

describe('Rewards component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Rewards />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Rewards from './rewards';

describe('Rewards component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter>
      <Rewards />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
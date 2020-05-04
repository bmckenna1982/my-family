import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import PointsBar from './pointsBar';

describe('PointsBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PointsBar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
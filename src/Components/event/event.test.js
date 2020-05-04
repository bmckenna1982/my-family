import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Event from './event';

describe('Event component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Event />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected without day', () => {
    const tree = renderer
      .create(<Event startTime='3pm' title='Baseball practice' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('renders the UI as expected with day', () => {
    const tree = renderer
      .create(<Event day='Today' startTime='3pm' title='Baseball practice' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });
})



import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import AppContext from '../context/appContext'
import ListsPage from './listsPage';

describe.skip('ListsPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ListsPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
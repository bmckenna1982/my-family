import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Calendar from './calendar';
import CalendarWeek from '../calendarWeek/calendarWeek'

describe.only('Calendar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Calendar />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })


})
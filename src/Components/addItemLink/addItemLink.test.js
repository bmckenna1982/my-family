import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import AddItemLink from './addItemLink';

describe('AddItemLink component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <AddItemLink />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render the icon and the type of item passed if provided', () => {
    const name = 'Test'
    const wrapper = shallow(<AddItemLink itemName={name} />)
    const text = wrapper.find('Link')
    expect(text.text()).toBe(`<FontAwesomeIcon />Add ${name}`)
  })
})
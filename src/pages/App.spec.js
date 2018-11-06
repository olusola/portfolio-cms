import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('test wrapper', () => {
  it('should render div', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div').length).toBe(1)
  })
})

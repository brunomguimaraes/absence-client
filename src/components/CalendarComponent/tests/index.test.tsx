import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarComponent from '..';
import { setHookState } from '../../../utils/test';

const reactMock = require('react')

describe('CalendarComponent', () => {
  let wrapper;

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  it('renders the component', () => {
    wrapper = shallow(<CalendarComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the table with events', () => {
    wrapper = mount(<CalendarComponent />);

    reactMock.useState = setHookState({
      events: ["a lot of events"],
    })

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Calendar')).toMatchSnapshot();
    expect(wrapper.find('Calendar').exists()).toEqual(true)
  });
});

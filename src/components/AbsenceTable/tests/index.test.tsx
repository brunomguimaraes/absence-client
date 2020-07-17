import React from 'react';
import { mount, shallow } from 'enzyme';
import AbsenceTable from '..';
import { setHookState } from '../../../utils/test';

const reactMock = require('react')

describe('AbsenceTable', () => {
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
    wrapper = shallow(<AbsenceTable />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the table with absences', () => {
    wrapper = mount(<AbsenceTable />);

    reactMock.useState = setHookState({
      absencesWithEmployee: ["a lot of stuff"],
  })
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('Table')).toMatchSnapshot();
  expect(wrapper.find('Table').exists()).toEqual(true)
  });
});



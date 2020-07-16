import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '..';

describe('Navbar', () => {
  it('renders the component', () => {
    const component = shallow(<NavBar />);
    // const calendarButton = component.find('#calendar')
    // const absenceButton = component.find('#calendar')
    
    expect(component).toMatchSnapshot();
  });
  
  // it('', () => {
  //   const calendarButton = component.find('#calendar')
  //   expect(calendarButton).
  // });

  // it('', () => {

  // });
});


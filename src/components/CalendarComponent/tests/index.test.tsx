import React from 'react';
import { shallow } from 'enzyme';
import CalendarComponent from '..';

describe('CalendarComponent', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarComponent />);
    expect(component).toMatchSnapshot();
  });
});


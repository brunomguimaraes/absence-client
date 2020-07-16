import React from 'react';
import { shallow } from 'enzyme';

import CalendarPage from '..';

describe('CalendarPage', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarPage />);
    expect(component).toMatchSnapshot();
  });
});

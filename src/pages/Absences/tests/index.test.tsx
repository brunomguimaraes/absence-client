import React from 'react';
import { shallow } from 'enzyme';

import Absences from '..';

describe('Absences', () => {
  it('renders the component', () => {
    const component = shallow(<Absences />);
    expect(component).toMatchSnapshot();
  });
});

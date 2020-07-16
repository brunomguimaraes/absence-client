import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '..';

describe('Navbar', () => {
  it('renders the component', () => {
    const component = shallow(<NavBar />);

    expect(component).toMatchSnapshot();
  });
});


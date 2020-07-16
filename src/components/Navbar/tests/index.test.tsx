import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '..';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Navbar', () => {
  it('renders the component', () => {
    const component = shallow(<NavBar />);
    expect(component).toMatchSnapshot();
  });

  it('calls /absence route', () => {
    const component = shallow(<NavBar />);
    component.find('Menu').simulate('click', { key: 'absence' });
    expect(mockHistoryPush).toHaveBeenCalledWith('/absence');
  })

  it('calls /calendar route', () => {
    const component = shallow(<NavBar />);
    component.find('Menu').simulate('click', { key: 'calendar' });
    expect(mockHistoryPush).toHaveBeenCalledWith('/calendar');
  })

});


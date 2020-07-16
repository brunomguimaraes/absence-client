import React from 'react';
import { shallow } from 'enzyme';
import MembersTable from '..';

describe('MembersTable', () => {
  it('renders the component', () => {
    const component = shallow(<MembersTable />);
    expect(component).toMatchSnapshot();
  });
});


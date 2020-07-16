import React from 'react';
import { shallow } from 'enzyme';
import AbsenceTable from '..';

describe('AbsenceTable', () => {
  it('renders the component', () => {
    const component = shallow(<AbsenceTable />);

    // expect(component.find('Table').props().);
    expect(component).toMatchSnapshot();
  });
});



import React from 'react';
import {mount} from 'enzyme';
import Search from '../../components/Search';

describe('<Search>', ()=> {
  test('should render correctly', () => {
    const component = mount(<Search />);
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import {mount} from 'enzyme';
import Header from '../../components/Header';

describe('<Header>', ()=> {
  test('should render correctly', ()=> {
    const component = mount(<Header />);
    expect(component).toMatchSnapshot();
  });
});

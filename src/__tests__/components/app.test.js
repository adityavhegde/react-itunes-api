import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';
import Search from '../../components/Search';

describe('<App />', () => {
  test('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});

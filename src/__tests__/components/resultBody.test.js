import React from 'react';
import { mount, shallow } from 'enzyme';
import ResultBody from '../../components/ResultBody';

describe('results body tests', ()=> {
  test('should render correctly', ()=> {
    const component = mount(<ResultBody />);
    expect(component).toMatchSnapshot();
  });

  test('loads initially with welcome', () => {
    const component = mount(<ResultBody />);
    expect(component.find('h2').text()).toEqual('Welcome');
    expect(component.find('p').text()).toEqual('Search your favorite artist!');
  });

  test('should have initial state with empty data and query', () => {
    const component = mount(<ResultBody />);
    expect(component.state('query').length).toEqual(0);
    expect(Object.keys(component.state('data')).length).toEqual(0);
  });

  test('async function loads json with data', async ()=>{
    const component = mount(<ResultBody />);
    const instance = component.instance();
    await instance.fetchSearchResults({query:'Shankar Mahadevan'});
    expect(component.state()).toMatchSnapshot();
    expect(component.state('data').resultCount).toBeGreaterThan(0);
  });

  test('empty search should prompt warning', ()=>{
    const component = mount(<ResultBody />);
    const state = {
      data: {results:[]},
      query: ''
    };
    component.setState(state);
    expect(component.find('div').text()).toEqual('Enter Artist Name to Search');
  });

  test('if api does not have artist, display message', () => {
    const component = mount(<ResultBody />);
    const state = {
      data: {results:[]},
      query: 'Steve aoiki'
    };
    component.setState(state);
    expect(component.find('div').text()).toEqual('No music found for Steve aoiki');

  });

  test('should render given number of items', ()=> {
    const component = mount(<ResultBody />);
    const state = {
      data: {
        resultCount:0,
        results:[{
          artistName:'Sonu Nigam', collectionName:"Student of the year",
          releaseDate:'2012-12-9',artworkUrl100:' '},
          {artistName:'Shankar Mahadevan', collectionName:"Student of the year",
          releaseDate:'2012-12-9', artworkUrl100:' '}]
      },
      query: 'indian'
    };
    component.setState(state);
    expect(component.find('img').length).toBe(2);

  });

});

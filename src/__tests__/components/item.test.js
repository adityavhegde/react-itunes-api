import React from 'react';
import {mount} from 'enzyme';
import Item from '../../components/Item';

describe('<Item>', ()=> {

  test('item renders and receives props', () => {
    const details = {
      artistName:"Neeti Mohan",
      collectionName:"Student of the year",
      releaseDate:'2012-12-9',
      artworkUrl100:' '
    };
    const component = mount(<Item {...details}/>);
    expect(component).toMatchSnapshot();
    expect(component.find('img').length).toBe(1);
    expect(component.prop('artistName')).toEqual('Neeti Mohan');
    expect(component.prop('collectionName')).toEqual('Student of the year');
    expect(component.prop('artworkUrl100')).toEqual(' ');

  });

  test('components render elements with props', () => {
    const details = {
      artistName:"Neeti Mohan",
      collectionName:"Student of the year",
      releaseDate:'2012-12-9',
      artworkUrl100:''
    };
    const component = mount(<Item {...details}/>);
    expect(component.find('.row').children().length).toBe(2);
    expect(component.find('img').html()).toEqual('<img src="" alt="Student of the year">');
    expect(component.find('b').text()).toEqual('Neeti Mohan');
    expect(component.find('p').at(0).text()).toEqual('Student of the year');
    expect(component.find('p').at(1).text()).toEqual("2012");
  });

  test('artist name: should contain empty string if none found', ()=>{
    const details = {
      artistName:"",
      collectionName:"Student of the year",
      releaseDate:'2012-9',
      artworkUrl100:' '
    };
    const component = mount(<Item {...details}/>);
    expect(component.find('b').text()).toEqual("");
  });

  test('album name: should contain empty string if none found', ()=>{
    const details = {
      artistName:"Neeti Mohan",
      collectionName:"",
      releaseDate:'2012-12',
      artworkUrl100:' '
    };
    const component = mount(<Item {...details}/>);
    expect(component.find('p').at(0).text()).toEqual('');
  });

  test('year: should contain empty string if none found', ()=>{
    const details = {
      artistName:"Neeti Mohan",
      collectionName:"Student of the year",
      releaseDate:'',
      artworkUrl100:' '
    };
    const component = mount(<Item {...details}/>);
    expect(component.find('p').at(1).text()).toEqual("");
  });
});

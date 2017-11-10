import React, {Component} from 'react';
import Item from './Item';
import {Grid, Alert} from 'react-bootstrap';
import './../css/resultBody.css';


class ResultBody extends Component {

  state = {
    data: {},
    query: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.state.query) {
      this.fetchSearchResults(nextProps.query);
    }
  }

  async fetchSearchResults(state) {
    const search = state.query.split(' ').join('+');
    const apiURL = 'https://itunes.apple.com/search?media=music&term=';
    const query = apiURL + search;
    const response = await fetch(query);
    const json = await response.json();

    this.setState({
      data: json,
      query: state.query
    });
  }

  renderResults() {
    const results = this.state.data.results;
    const searchText = this.state.query;

    let warning = "Enter Artist Name to Search";

    if(searchText.length > 0) {
      warning = "No music found for "+searchText;
    }

    const alertInstance = <Alert bsStyle="warning">{warning}</Alert>;
    const toReturn =
      results.length > 0 ? <Grid>{results.map((entry, index) => <Item key={index} {...entry}/>)}</Grid> : alertInstance;
    return toReturn;
  }

  render() {
    const dataLength = Object.keys(this.state.data).length;
    const queryLength = this.state.query.length;
    const welcome = <div className="welcome-msg"><h2>Welcome</h2><p>Search your favorite artist!</p></div>;
    const toRender = dataLength === 0 && queryLength === 0 ? welcome : this.renderResults();
    return(
      toRender
    );
  }
}

export default ResultBody;

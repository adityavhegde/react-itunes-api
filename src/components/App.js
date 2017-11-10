import React, {Component} from 'react';
import Search from './Search';
import Header from './Header';
import ResultBody from './ResultBody';
import {Grid} from 'react-bootstrap';

class App extends Component {

  state = {
    searchText:''
  }

  updateSearchText(query) {
    this.setState({
      searchText:query
    });
  }

  render() {
    return (
      <Grid>
        <Header/>
        <Search queryCallback={this.updateSearchText.bind(this)}/>
        <br/>
        <ResultBody query={this.state.searchText}/>
      </Grid>
    )
  }
}

export default App;

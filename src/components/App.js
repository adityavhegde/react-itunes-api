import React, {Component} from 'react';
import Search from './Search';
import Header from './Header';
import ResultBody from './ResultBody';
import {Grid} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <Grid>
        <Header/>
        <Search/>
        <br/>
        <ResultBody/>
      </Grid>
    )
  }
}

export default App;

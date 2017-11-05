import React, {Component} from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';
import emitter from '../Emitter';

class Search extends Component {

  constructor(props) {
    super(props);
    this.searchEmitter = (e) => {
      if(e.keyCode === 13) {
        let data = {query: document.getElementById("search-bar").value};
        emitter.emit('search', data);
      }
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <FormControl
            id="search-bar"
            type="text"
            placeholder="Search"
            onKeyUp={this.searchEmitter}
          />
        </Col>
      </Row>
    )
  }
}

export default Search;

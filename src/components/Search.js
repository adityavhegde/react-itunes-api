import React, {Component} from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

class Search extends Component {

  constructor(props) {
    super(props);
    this.searchHandler = (e) => {
      if(e.keyCode === 13) {
        let data = {query: document.getElementById("search-bar").value};
        this.props.queryCallback(data);
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
            onKeyUp={this.searchHandler}
          />
        </Col>
      </Row>
    )
  }
}

export default Search;

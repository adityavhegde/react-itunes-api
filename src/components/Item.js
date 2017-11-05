import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import './../css/item.css';

class Item extends Component {

  getArtist() {
    return this.props.artistName || '';
  }

  getAlbum() {
    return this.props.collectionName || '';
  }

  getYear() {
    return this.props.releaseDate.split('-')[0] || '';
  }

  getThumbnail() {
    const noImage = <b>Thumbnail Unavailable</b>;
    const image = <img src={this.props.artworkUrl100.replace('100x100', '300x300')} alt={this.props.collectionName}/>;
    return image || noImage;
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={4} className="img-holder">
            {this.getThumbnail()}
          </Col>
          <Col xs={4} className="album-details">
            <b>{this.getArtist()}</b>
            <p>{this.getAlbum()}</p>
            <p>{this.getYear()}</p>
          </Col>
        </Row>
        <hr/>
    </div>
    )
  }

}

export default Item;

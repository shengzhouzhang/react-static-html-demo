
import _ from 'lodash';
import React from 'react';
import Container from '../../components/Pages/Container';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class Model extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  };
  render = () => {
    let images = _.map(this.props.items, item => {
      return { imageUrl: item.imageUrl };
    });
    let navigations = [
      { name: 'index page', uri: '/' },
      { name: this.props.items[0].make, uri: `/make/${this.props.items[0].make}` }
    ]
    return (
      <Container title="model">
        <Header title="model" navigations={navigations} />
        <Thumbnails items={images} />
      </Container>
    );
  };
}


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
      { name: this.props.make, uri: '/make/${items[0].make}}' }
    ]
    return (
      <Container title="make index">
        <Header title="make index" navigations={navigations} />
        <Thumbnails items={images} />
      </Container>
    );
  };
}

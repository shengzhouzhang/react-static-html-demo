
import _ from 'lodash';
import React from 'react';
import Container from '../../components/Pages/Container';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class MakeIndex extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
  };
  render = () => {
    let images = _.map(this.props.items, item => {
      return { imageUrl: item.imageUrl };
    });
    let navigations = _.map(this.props.items, item => {
      return { name: item.make, uri: '/makes/${item.make}' };
    });
    return (
      <Container title="make index">
        <Header title="make index" navigations={navigations} />
        <Thumbnails items={images} />
      </Container>
    );
  };
}

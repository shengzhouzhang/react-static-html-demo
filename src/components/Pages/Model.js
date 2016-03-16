
import _ from 'lodash';
import React from 'react';
import Container from '../../components/Pages/Container';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class Model extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array.isRequired
  };
  static defaultProps = {
    title: 'model page'
  };
  render = () => {
    let headerProps = this.getHeaderProps(this.props.title, this.props.items);
    let thumbnailsProps = this.getThumbnailsProps(this.props.items);
    return (
      <Container title={this.props.title}>
        <Header {...headerProps} />
        <Thumbnails {...thumbnailsProps} />
      </Container>
    );
  };
  getHeaderProps = (title, works) => {
    return {
      title: title,
      navigations: [
        { name: 'index page', uri: '../../../index.html' },
        { name: works[0].make, uri: '../index.html' }
      ]
    };
  };
  getThumbnailsProps = (works) => {
    return {
      items: _.map(works, work => {
        return { imageUrl: work.imageUrl, name: `${work.make}-${work.model}` };
      })
    };
  };
}

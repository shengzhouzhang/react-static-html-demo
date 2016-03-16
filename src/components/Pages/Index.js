
import _ from 'lodash';
import React from 'react';
import Container from '../../components/Pages/Container';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class Index extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array.isRequired,
  };
  static defaultProps = {
    title: 'index'
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
      navigations: _.map(works, work => {
        return { name: work.make, uri: `/make/${work.make}` };
      })
    };
  };
  getThumbnailsProps = (works) => {
    return {
      items: _.map(works, work => {
        return { imageUrl: work.imageUrl };
      })
    };
  };
}


import _ from 'lodash';
import React from 'react';
import Container from '../../components/Pages/Container';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class Index extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array.isRequired
  };
  static defaultProps = {
    title: 'index page'
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
      navigations: _.chain(works)
        .groupBy(work => work.make)
        .map((works, make) => {
          return { name: make, uri: `makes/${make}/index.html` };
        })
        .sortBy(navigation => navigation.name)
        .value()
    };
  };
  getThumbnailsProps = (works) => {
    return {
      items: _.chain(works)
        .map(work => {
          return { imageUrl: work.imageUrl, name: `${work.make}-${work.model}` };
        })
        .take(10)
        .value()
    };
  };
}


import _ from 'lodash';
import React from 'react';

export default class Thumbnails extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  };
  render = () => {
    let thumbnails = _.map(this.props.items, (item, index) => {
      return (<Thumbnail key={`thumbnail-${index}`} {...item} />);
    });
    return (
      <div>{ thumbnails }</div>
    );
  };
}

export class Thumbnail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  };
  render = () => {
    return (<img name={this.props.name} src={this.props.imageUrl} />);
  };
}

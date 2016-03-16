
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
      <div className="thumbnails">{ thumbnails }</div>
    );
  };
}

export class Thumbnail extends React.Component {
  static propTypes = {
    imageUrl: React.PropTypes.string.isRequired
  };
  render = () => {
    return (<img className="thumbnail" src={this.props.imageUrl} />);
  };
}

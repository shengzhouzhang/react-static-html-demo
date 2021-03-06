
import _ from 'lodash';
import React from 'react';

export default class Navigations extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  };
  render = () => {
    let navigations = _.map(this.props.items, (item, index) => {
      return (<Navigation key={`navigation-${index}`} {...item} />);
    });
    return (
      <nav>{ navigations }</nav>
    );
  };
}

export class Navigation extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    uri: React.PropTypes.string.isRequired
  };
  static defaultProps = {
    name: ''
  };
  render = () => {
    return (<a href={this.props.uri}>{this.props.name}</a>);
  };
}

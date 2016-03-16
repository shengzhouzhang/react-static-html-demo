
import React from 'react';

export default class Title extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  };
  render = () => {
    return (<h1>{ this.props.title }</h1>);
  };
}

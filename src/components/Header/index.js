
import React from 'react';
import Navigations from '../../components/Navigations';

export default class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    navigations: React.PropTypes.array.isRequired,
  };
  render = () => {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        <nav><Navigations items={this.props.navigations} /></nav>
      </header>
    );
  };
}

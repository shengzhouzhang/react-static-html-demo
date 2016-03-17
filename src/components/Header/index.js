
import React from 'react';
import Title from '../../components/Title';
import Navigations from '../../components/Navigations';

export default class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    navigations: React.PropTypes.array.isRequired
  };
  render = () => {
    return (
      <header>
        <Title title={this.props.title} />
        <Navigations items={this.props.navigations} />
      </header>
    );
  };
}

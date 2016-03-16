
import _ from 'lodash';
import React from 'react';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class Containers extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
  };
  render = () => {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style type="text/css">{'nav { margin: 10px; }'}</style>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  };
}

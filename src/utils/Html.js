
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Html {
  constructor () {
    this.docTpye = '<!DOCTYPE html>';
  };
  toStatic (Component, props) {
    return this.docTpye + ReactDOMServer.renderToStaticMarkup(<Component {...props} />);
  };
}

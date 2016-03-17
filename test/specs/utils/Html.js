
import _ from 'lodash';
import React from 'react';
import { expect } from 'chai';
import Index from '../../../src/components/Pages/Index';
import Html from '../../../src/utils/Html';

describe('Html Util', () => {

  describe('properties', () => {

    it('should have docTpye property', () => {
      let html = new Html();
      expect(html).to.have.property('docTpye');
      expect(html.docTpye).to.eql('<!DOCTYPE html>');
    });
  });

  describe('toStatic function', () => {

    it('should render react component to static html', () => {
      let html = new Html();
      let result = html.toStatic(Index, { items: [] });
      expect(result).to.eql(
        '<!DOCTYPE html><html><head><title>index page</title><style type="text/css">nav { margin: 10px; }</style></head><body><header><h1>index page</h1><nav></nav></header><div></div></body></html>'
      );
    });
  });
});

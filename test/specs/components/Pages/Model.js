
import _ from 'lodash';
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../../../../src/components/Header';
import Thumbnails from '../../../../src/components/Thumbnails';
import Model from '../../../../src/components/Pages/Model';

describe('Model Component', () => {

  describe('render function', () => {

    it('should render header and thumbnails', () => {
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE', model: 'MODEL' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE', model: 'MODEL' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: 'model page',
        navigations: [
          { name: 'index page', uri: '../../../index.html' },
          { name: 'MAKE', uri: '../index.html' },
        ]
      };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [
          { imageUrl: 'URI_1', name: 'MAKE-MODEL' },
          { imageUrl: 'URI_2', name: 'MAKE-MODEL' }
        ]
      };
      let wrapper = shallow(<Model {...PROPS} />);
      expect(wrapper.find(Header)).to.have.length(1);
      expect(wrapper.find(Header).props()).to.eql(EXPECTED_HEADER_PROPS);
      expect(wrapper.find(Thumbnails)).to.have.length(1);
      expect(wrapper.find(Thumbnails).props()).to.eql(EXPECTED_THUMBNAILS_PROPS);
    });
  });

  describe('getHeaderProps function', () => {

    it('should return the props of header', () => {
      const TITLE = 'TITLE';
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE', model: 'MODEL' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE', model: 'MODEL' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: TITLE,
        navigations: [
          { name: 'index page', uri: '../../../index.html' },
          { name: 'MAKE', uri: '../index.html' },
        ]
      };
      let wrapper = shallow(<Model {...PROPS} />);
      expect(wrapper.instance().getHeaderProps(TITLE, PROPS.items)).to.eql(EXPECTED_HEADER_PROPS);
    });
  });

  describe('getThumbnailsProps function', () => {

    it('should return the props of thumbnails', () => {
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE', model: 'MODEL' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE', model: 'MODEL' }
      ] };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [
          { imageUrl: 'URI_1', name: 'MAKE-MODEL' },
          { imageUrl: 'URI_2', name: 'MAKE-MODEL' }
        ]
      };
      let wrapper = shallow(<Model {...PROPS} />);
      expect(wrapper.instance().getThumbnailsProps(PROPS.items)).to.eql(EXPECTED_THUMBNAILS_PROPS);
    });
  });
});

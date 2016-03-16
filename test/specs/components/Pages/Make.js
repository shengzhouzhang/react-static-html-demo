
import _ from 'lodash';
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../../../../src/components/Header';
import Thumbnails from '../../../../src/components/Thumbnails';
import Make from '../../../../src/components/Pages/Make';

describe('Make Component', () => {

  describe('render function', () => {

    it('should render header and thumbnails', () => {
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE', model: 'MODEL_2' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: 'make',
        navigations: [
          { name: 'index page', uri: '../../index.html' },
          { name: 'MODEL_1', uri: 'models/MODEL_1.html' },
          { name: 'MODEL_2', uri: 'models/MODEL_2.html' }
        ]
      };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [ { imageUrl: 'URI_1' }, { imageUrl: 'URI_2' } ]
      };
      let wrapper = shallow(<Make {...PROPS} />);
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
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE', model: 'MODEL_2' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: TITLE,
        navigations: [
          { name: 'index page', uri: '../../index.html' },
          { name: 'MODEL_1', uri: 'models/MODEL_1.html' },
          { name: 'MODEL_2', uri: 'models/MODEL_2.html' }
        ]
      };
      let wrapper = shallow(<Make {...PROPS} />);
      expect(wrapper.instance().getHeaderProps(TITLE, PROPS.items)).to.eql(EXPECTED_HEADER_PROPS);
    });
  });

  describe('getThumbnailsProps function', () => {

    it('should return the props of thumbnails', () => {
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE', model: 'MODEL_2' }
      ] };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [ { imageUrl: 'URI_1' }, { imageUrl: 'URI_2' } ]
      };
      let wrapper = shallow(<Make {...PROPS} />);
      expect(wrapper.instance().getThumbnailsProps(PROPS.items)).to.eql(EXPECTED_THUMBNAILS_PROPS);
    });
  });
});

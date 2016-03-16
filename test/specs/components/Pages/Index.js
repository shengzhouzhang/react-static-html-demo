
import _ from 'lodash';
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../../../../src/components/Header';
import Thumbnails from '../../../../src/components/Thumbnails';
import Index from '../../../../src/components/Pages/Index';

describe('Index Component', () => {

  describe('render function', () => {

    it('should render header and thumbnails', () => {
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE_1', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE_2', model: 'MODEL_2' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: 'index',
        navigations: [
          { name: 'MAKE_1', uri: '/make/MAKE_1' },
          { name: 'MAKE_2', uri: '/make/MAKE_2' }
        ]
      };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [ { imageUrl: 'URI_1' }, { imageUrl: 'URI_2' } ]
      };
      let wrapper = shallow(<Index {...PROPS} />);
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
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE_1', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE_2', model: 'MODEL_2' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: 'TITLE',
        navigations: [
          { name: 'MAKE_1', uri: '/make/MAKE_1' },
          { name: 'MAKE_2', uri: '/make/MAKE_2' }
        ]
      };
      let wrapper = shallow(<Index {...PROPS} />);
      expect(wrapper.instance().getHeaderProps(TITLE, PROPS.items)).to.eql(EXPECTED_HEADER_PROPS);
    });
  });

  describe('getThumbnailsProps function', () => {

    it('should return the props of thumbnails', () => {
      const PROPS = { items: [
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE_1', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE_2', model: 'MODEL_2' }
      ] };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [ { imageUrl: 'URI_1' }, { imageUrl: 'URI_2' } ]
      };
      let wrapper = shallow(<Index {...PROPS} />);
      expect(wrapper.instance().getThumbnailsProps(PROPS.items)).to.eql(EXPECTED_THUMBNAILS_PROPS);
    });
  });
});

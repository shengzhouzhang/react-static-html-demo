
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
        title: 'model',
        navigations: [
          { name: 'index page', uri: '/' },
          { name: 'MAKE', uri: '/make/MAKE' },
        ]
      };
      const EXPECTED_THUMBNAILS_PROPS = {
        items: [ { imageUrl: 'URI_1' }, { imageUrl: 'URI_2' } ]
      };
      let wrapper = shallow(<Model {...PROPS} />);
      expect(wrapper.find(Header)).to.have.length(1);
      expect(wrapper.find(Header).props()).to.eql(EXPECTED_HEADER_PROPS);
      expect(wrapper.find(Thumbnails)).to.have.length(1);
      expect(wrapper.find(Thumbnails).props()).to.eql(EXPECTED_THUMBNAILS_PROPS);
    });
  });
});

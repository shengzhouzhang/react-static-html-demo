
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
        { _id: 'ID_1', imageUrl: 'URI_1', make: 'MAKE_1', model: 'MODEL_1' },
        { _id: 'ID_2', imageUrl: 'URI_2', make: 'MAKE_2', model: 'MODEL_2' }
      ] };
      const EXPECTED_HEADER_PROPS = {
        title: 'make',
        navigations: [
          { name: 'MODEL_1', uri: '/make/MAKE_1/model/MODEL_1' },
          { name: 'MODEL_2', uri: '/make/MAKE_2/model/MODEL_2' }
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
});

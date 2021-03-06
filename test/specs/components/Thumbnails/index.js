
import _ from 'lodash';
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Thumbnails, { Thumbnail } from '../../../../src/components/Thumbnails';

describe('Thumbnails Component', () => {

  describe('render function', () => {

    it('should render a list of thumbnails and provide image url', () => {
      const PROPS = { items: [ { imageUrl: 'IMAGE_URL_1' }, { imageUrl: 'IMAGE_URL_2' } ] };
      let wrapper = shallow(<Thumbnails {...PROPS} />);
      expect(wrapper.find(Thumbnail)).to.have.length(PROPS.items.length);
      _.forEach(PROPS.items, (item, index) => {
        expect(wrapper.find(Thumbnail).get(index).props).to.eql(item);
      });
    });
  });
});

describe('Thumbnail Component', () => {

  describe('render function', () => {

    it('should render image and provide url', () => {
      const PROPS = { imageUrl: 'IMAGE_URL' };
      let wrapper = shallow(<Thumbnail {...PROPS} />);
      expect(wrapper.find('img')).to.have.length(1);
      expect(wrapper.find('img').prop('src')).to.eql(PROPS.imageUrl);
    });
  });
});

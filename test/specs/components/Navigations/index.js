
import _ from 'lodash';
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navigations, { Navigation } from '../../../../src/components/Navigations';

describe('Navigations Component', () => {

  describe('render function', () => {

    it('should render a list of navigations and provide name and uri', () => {
      const PROPS = { items: [ { name: 'NAME_1', uri: 'URI_1' }, { name: 'NAME_2', uri: 'URI_2' } ] };
      let wrapper = shallow(<Navigations {...PROPS} />);
      expect(wrapper.find(Navigation)).to.have.length(PROPS.items.length);
      _.forEach(PROPS.items, (item, index) => {
        expect(wrapper.find(Navigation).get(index).props).to.eql(item);
      });
    });
  });
});

describe('Navigation Component', () => {

  describe('render function', () => {

    it('should render link and provide name and url', () => {
      const PROPS = { name: 'NAME_1', uri: 'URI_1' };
      let wrapper = shallow(<Navigation {...PROPS} />);
      expect(wrapper.find('a')).to.have.length(1);
      expect(wrapper.find('a').prop('href')).to.eql(PROPS.uri);
      expect(wrapper.find('a').text()).to.eql(PROPS.name);
    });
  });
});

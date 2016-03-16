
import _ from 'lodash';
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Title from '../../../../src/components/Title';
import Navigations from '../../../../src/components/Navigations';
import Header from '../../../../src/components/Header';

describe('Header Component', () => {

  describe('render function', () => {

    it('should render title and navigations', () => {
      const PROPS = { title: 'TITLE', navigations: [ { name: 'NAME_1', uri: 'URI_1' }] };
      let wrapper = shallow(<Header {...PROPS} />);
      expect(wrapper.find(Title)).to.have.length(1);
      expect(wrapper.find(Title).prop('title')).to.eql(PROPS.title);
      expect(wrapper.find(Navigations)).to.have.length(1);
      expect(wrapper.find(Navigations).prop('items')).to.eql(PROPS.navigations);
    });
  });
});

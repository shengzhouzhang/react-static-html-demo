
import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Title from '../../../../src/components/Title';

describe('Title Component', () => {

  describe('render function', () => {

    it('should render title', () => {
      const PROPS = { title: 'TITLE' };
      let wrapper = shallow(<Title {...PROPS} />);
      expect(wrapper.find('h1')).to.have.length(1);
      expect(wrapper.find('h1').text()).to.eql(PROPS.title);
    });
  });
});


import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Container from '../../../../src/components/Pages/Container';

describe('Container Component', () => {

  describe('render function', () => {

    it('should render title and children', () => {
      const PROPS = { title: 'TITLE' };
      const CHILD = (<div className="child"></div>);
      let wrapper = shallow(<Container {...PROPS} >{CHILD}</Container>);
      expect(wrapper.find('title')).to.have.length(1);
      expect(wrapper.contains(CHILD)).to.eql(true);
    });
  });
});

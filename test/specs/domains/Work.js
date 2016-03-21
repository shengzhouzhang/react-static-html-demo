
import { expect } from 'chai';
import Work from '../../../src/domains/Work';

describe('Work Domain', () => {

  it('should have propety _id, imageUrl, make, model, and iso', () => {
    let work = new Work();
    expect(work).to.have.property('_id');
    expect(work).to.have.property('imageUrl');
    expect(work).to.have.property('make');
    expect(work).to.have.property('model');
    expect(work).to.have.property('iso');
  });

  it('should transfer make and model to lower cases', () => {
    const MAKE = 'MAKE';
    const MODEL = 'MODEL';
    let work = new Work('0', '', MAKE, MODEL);
    expect(work.make).to.eql(MAKE.toLowerCase());
    expect(work.model).to.eql(MODEL.toLowerCase());
  });
});

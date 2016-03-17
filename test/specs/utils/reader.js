
import _ from 'lodash';
import path from 'path';
import { expect } from 'chai';
import Reader from '../../../src/utils/Reader';
import Work from '../../../src/domains/Work';

describe('Reader Util', () => {

  describe('loadXml function', () => {

    it('should get xml from file', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'input', 'works.xml');
      let reader = new Reader(filePath);
      return reader.loadXml(filePath);
    });
  });

  describe('parseXmlToJson function', () => {

    it('should parse xml to json', () => {
      const xmlString = '<root>Hello xml2js!</root>';
      let reader = new Reader();
      return reader.parseXmlToJson(xmlString);
    });
  });

  describe('parseJsonToEntities function', () => {

    it('should parse xml from file to json', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'input', 'works.xml');
      let reader = new Reader(filePath);
      return reader.loadXml(filePath)
        .then(reader.parseXmlToJson)
        .then(reader.parseJsonToEntities)
        .then(entities => {
          _.forEach(entities, entity => {
            expect(entity).to.be.an.instanceof(Work);
            expect(entity).to.have.property('_id');
            expect(entity).to.have.property('imageUrl');
            expect(entity).to.have.property('make');
            expect(entity).to.have.property('model');
            expect(entity._id).to.exist;
            expect(entity.imageUrl).to.exist;
          });
        });
    });
  });

  describe('parseXmlToEntities function', () => {

    it('should parse xml from file to json', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'input', 'works.xml');
      let reader = new Reader(filePath);
      return reader.parseXmlToEntities();
    });
  });
});

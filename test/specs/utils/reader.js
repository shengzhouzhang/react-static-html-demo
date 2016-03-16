
import _ from 'lodash';
import path from 'path';
import { expect } from 'chai';
import parseXmlToEntities, { loadXml, parseXmlToJson, parseJsonToEntities } from '../../../src/utils/reader';
import Work from '../../../src/domains/Work';

describe('reader util', () => {

  describe('loadXml function', () => {

    it('should get xml from file', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      return loadXml(filePath);
    });
  });

  describe('parseXmlToJson function', () => {

    it('should parse xml to json', () => {
      const xmlString = '<root>Hello xml2js!</root>';
      return parseXmlToJson(xmlString);
    });
  });

  describe('parseJsonToEntities function', () => {

    it('should parse xml from file to json', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      return loadXml(filePath)
        .then(parseXmlToJson)
        .then(parseJsonToEntities)
        .then(entities => {
          _.forEach(entities, entity => {
            expect(entity).to.be.an.instanceof(Work);
            expect(entity).to.have.property('_id');
            expect(entity).to.have.property('imageUrl');
            expect(entity).to.have.property('make');
            expect(entity).to.have.property('model');
          });
        });
    });
  });

  describe('parseXmlToEntities function', () => {

    it('should parse xml from file to json', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      return parseXmlToEntities(filePath);
    });
  });
});

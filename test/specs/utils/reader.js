
import path from 'path';
import loadXmlAsJson, { loadXml, parseXmlToJson } from '../../../src/utils/reader';

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

  describe('loadXmlAsJson function', () => {

    it('should parse xml from file to json', () => {
      const filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      return loadXmlAsJson(filePath)
        .then(json => {
          console.log(JSON.stringify(json));
        });
    });
  });
});

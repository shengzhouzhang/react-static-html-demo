
import path from 'path';
import { expect } from 'chai';
import IndexProducer from '../../../src/producers/IndexProducer';

describe('Index Producer', () => {

  describe('constructor function', () => {

    it('should create property input, output, reader, writer, and html', () => {
      const INPUT = 'INPUT';
      const OUTPUT = 'OUTPUT';
      let indexProducer = new IndexProducer(INPUT, OUTPUT);
      expect(indexProducer).to.have.property('input');
      expect(indexProducer).to.have.property('output');
      expect(indexProducer).to.have.property('reader');
      expect(indexProducer).to.have.property('writer');
      expect(indexProducer).to.have.property('html');
      expect(indexProducer.input).to.eql(INPUT);
      expect(indexProducer.output).to.eql(OUTPUT);
      expect(indexProducer.reader.filePath).to.eql(INPUT);
    });
  });

  describe('createIndex function', () => {

    it('should create index file', () => {
      const INPUT = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');

      return new IndexProducer(INPUT, OUTPUT).createIndex();
    });
  });
});

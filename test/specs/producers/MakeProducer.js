
import path from 'path';
import { expect } from 'chai';
import MakeProducer from '../../../src/producers/MakeProducer';

describe('Make Producer', () => {

  describe('constructor function', () => {

    it('should create property input, output, reader, writer, and html', () => {
      const INPUT = 'INPUT';
      const OUTPUT = 'OUTPUT';
      let indexProducer = new MakeProducer(INPUT, OUTPUT);
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

  describe('createMakes function', () => {

    it('should create index file', () => {
      const INPUT = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');

      return new MakeProducer(INPUT, OUTPUT).createMakes();
    });
  });

  describe('groupByMake function', () => {

    it('should group works by make', () => {
      const INPUT = path.resolve(__dirname, '..', '..', '..', 'data', 'works.xml');
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');
      const WORKS = [ { make: '1' }, { make: '2' }, { make: '1' } ];
      let result = new MakeProducer(INPUT, OUTPUT).groupByMake(WORKS);
      expect(result).to.eql({
        '1': [ { make: '1' }, { make: '1' } ],
        '2': [ { make: '2' } ]
      })
    });
  });

  describe('getStaticHtml function', () => {

    it('should return static html string', () => {
      const WORKS = [];
      let result = new MakeProducer().getStaticHtml(WORKS);
      expect(result).to.eql(
        '<!DOCTYPE html><html><head><title>make page</title><style type="text/css">nav { margin: 10px; }</style></head><body><header><h1>make page</h1><nav><a href="../../index.html">index page</a></nav></header><div></div></body></html>'
      );
    });
  });

  describe('getOutputPath function', () => {

    it('should return the file path of the output file', () => {
      const INPUT = '';
      const OUTPUT = './output';
      const MAKE_NAME = 'MAKE';
      let result = new MakeProducer(INPUT, OUTPUT).getOutputPath(MAKE_NAME);
      expect(result).to.eql(`./output/makes/MAKE/index.html`);
    });
  });
});

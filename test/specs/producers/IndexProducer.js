
import fs from 'fs';
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
      const INPUT = path.resolve(__dirname, '..', '..', '..', 'input', 'works.xml');
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');

      return new IndexProducer(INPUT, OUTPUT).createIndex()
        .then(() => {
          let status = fs.statSync(OUTPUT + '/index.html');
          expect(status.isFile()).to.eql(true);
        });
    });
  });

  describe('createFile function', () => {

    it('should create file', () => {
      const INPUT = ''
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');
      const OUTPUT_FILE = OUTPUT + '/TEST';
      const TEXT = 'TEST TEST';
      return new IndexProducer(INPUT, OUTPUT).createFile(OUTPUT_FILE, 'TEST TEST')
        .then(() => {
          let result = fs.readFileSync(OUTPUT_FILE, 'utf8');
          expect(result).to.eql(TEXT);
        });
    });
  });

  describe('getStaticHtml function', () => {

    it('should return static html string', () => {
      const WORKS = [];
      let result = new IndexProducer().getStaticHtml(WORKS);
      expect(result).to.eql(
        '<!DOCTYPE html><html><head><title>index page</title><style type="text/css">nav { margin: 10px; }</style></head><body><header><h1>index page</h1><nav></nav></header><div></div></body></html>'
      );
    });
  });

  describe('getOutputPath function', () => {

    it('should return the file path of the output file', () => {
      const INPUT = '';
      const OUTPUT = './output';
      let result = new IndexProducer(INPUT, OUTPUT).getOutputPath();
      expect(result).to.eql('./output/index.html');
    });
  });
});


import path from 'path';
import { expect } from 'chai';
import ModelProducer from '../../../src/producers/ModelProducer';

describe('Model Producer', () => {

  describe('constructor function', () => {

    it('should create property input, output, reader, writer, and html', () => {
      const INPUT = 'INPUT';
      const OUTPUT = 'OUTPUT';
      let indexProducer = new ModelProducer(INPUT, OUTPUT);
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

  describe('createModels function', () => {

    it('should create index file', () => {
      const INPUT = path.resolve(__dirname, '..', '..', '..', 'input', 'works.xml');
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');

      return new ModelProducer(INPUT, OUTPUT).createModels();
    });
  });

  describe('groupByMakeAndModel function', () => {

    it('should group works by make and model', () => {
      const INPUT = path.resolve(__dirname, '..', '..', '..', 'input', 'works.xml');
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output');
      const WORKS = [
        { make: '1', model: '1' }, { make: '1', model: '1' },
        { make: '2', model: '1' }, { make: '2', model: '2' }
      ];
      let result = new ModelProducer(INPUT, OUTPUT).groupByMakeAndModel(WORKS);
      expect(result).to.eql({
        'makes/1/models/1': [ { make: '1', model: '1' }, { make: '1', model: '1' } ],
        'makes/2/models/1': [ { make: '2', model: '1' } ],
        'makes/2/models/2': [ { make: '2', model: '2' } ]
      })
    });
  });

  describe('getStaticHtml function', () => {

    it('should return static html string', () => {
      const WORKS = [];
      let result = new ModelProducer().getStaticHtml(WORKS);
      expect(result).to.eql(
        '<!DOCTYPE html><html><head><title>unknown unknown</title><style type="text/css">nav { margin: 10px; }</style></head><body><header><h1>unknown unknown</h1><nav><a href="../../../index.html">index page</a><a href="../index.html">unknown</a></nav></header><div></div></body></html>'
      );
    });
  });

  describe('getOutputPath function', () => {

    it('should return the file path of the output file', () => {
      const INPUT = '';
      const OUTPUT = './output';
      const MADEL_NAME = 'MODEL_NAME';
      const EXPECTED_FILE_PATH = `${OUTPUT}/${MADEL_NAME}/index.html`;
      let result = new ModelProducer(INPUT, OUTPUT).getOutputPath(MADEL_NAME);
      expect(result).to.eql(EXPECTED_FILE_PATH);
    });
  });
});

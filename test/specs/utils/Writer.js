
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import Writer from '../../../src/utils/Writer';

describe('Writter Utils', () => {

  let writer = new Writer('./');

  describe('save function', () => {

    it('should save data to file', () => {
      const TEXT = 'TEST WRITER';
      const OUTPUT = path.resolve(__dirname, '..', '..', '..', 'output', 'TEST_WRITER');
      return writer.save(OUTPUT, TEXT)
        .then(() => {
          let result = fs.readFileSync(OUTPUT, 'utf8');
          expect(result).to.eql(TEXT);
        });
    });
  });
});

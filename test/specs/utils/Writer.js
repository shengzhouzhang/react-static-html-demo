
import Writer from '../../../src/utils/Writer';

describe('Writter Utils', () => {

  let writer = new Writer('./');

  describe('save function', () => {

    it('should save data to file', () => {
      return writer.save('test.html', 'test test');
    });
  });
});

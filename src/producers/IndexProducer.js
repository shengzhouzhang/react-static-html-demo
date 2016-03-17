
import _ from 'lodash';
import Reader from '../utils/Reader';
import Writer from '../utils/Writer';
import Html from '../utils/Html';
import Index from '../components/Pages/Index';

export default class IndexProducer {
  constructor (input, output) {
    this.input = input;
    this.output = output;

    this.reader = new Reader(this.input);
    this.writer = new Writer();
    this.html = new Html();
  };
  createIndex = () => {
    return this.reader.parseXmlToEntities()
      .then(works => this.html.toStatic(Index, { items: works }))
      .then(htmlStr => this.writer.create(`${this.output}/index.html`, htmlStr));
  };
}

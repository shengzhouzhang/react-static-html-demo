
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
      .then(works => this.getStaticHtml(works))
      .then(staticHtml => this.createFile(this.getOutputPath(), staticHtml));
  };
  createFile = (filePath, staticHtml) => {
    this.writer.create(filePath, staticHtml)
  };
  getStaticHtml = (works) => {
    return this.html.toStatic(Index, { items: works })
  };
  getOutputPath = () => {
    return `${this.output}/index.html`;
  };
}

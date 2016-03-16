
import Reader from './utils/Reader';
import Writer from './utils/Writer';
import Html from './utils/Html';
import MakeIndex from './components/Pages/MakeIndex';

const INDEX_FILE = 'index.html';

export default class Producer  {
  constructor (input, output) {
    this.input = input;
    this.output = output;
  };
  createIndex = () => {
    let reader = new Reader(this.input);
    let writer = new Writer(this.output);
    let html = new Html();

    return reader.parseXmlToEntities()
      .then(works => html.toStatic(MakeIndex, { items: works }))
      .then(htmlStr => writer.save(INDEX_FILE, htmlStr));
  };
}

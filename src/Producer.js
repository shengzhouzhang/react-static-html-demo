
import _ from 'lodash';
import Reader from './utils/Reader';
import Writer from './utils/Writer';
import Html from './utils/Html';
import Index from './components/Pages/Index';
import Make from './components/Pages/Make';

const INDEX_FILE = 'index.html';

export default class Producer  {
  constructor (input, output) {
    this.input = input;
    this.output = output;
  };
  createIndex = () => {
    let reader = new Reader(this.input);
    let writer = new Writer();
    let html = new Html();

    return reader.parseXmlToEntities()
      .then(works => html.toStatic(Index, { items: works }))
      .then(htmlStr => writer.create(`${this.output}/${INDEX_FILE}`, htmlStr));
  };
  createMakes = () => {
    let reader = new Reader(this.input);
    let writer = new Writer();
    let html = new Html();

    return reader.parseXmlToEntities()
      .then(works => _.groupBy(works, work => work.make))
      .then(groups => _.map(groups, (works, name) =>
        writer.create(`${this.output}/makes/${name || 'unknows'}/index.html`, html.toStatic(Make, { items: works }))
      ))
      .then(tasks => Promise.all(tasks));
  };
}

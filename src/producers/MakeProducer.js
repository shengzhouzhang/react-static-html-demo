
import _ from 'lodash';
import Reader from '../utils/Reader';
import Writer from '../utils/Writer';
import Html from '../utils/Html';
import Make from '../components/Pages/Make';

const INDEX_FILE = 'index.html';

export default class MakeProducer  {
  constructor (input, output) {
    this.input = input;
    this.output = output;

    this.reader = new Reader(this.input);
    this.writer = new Writer();
    this.html = new Html();
  };
  createMakes = () => {
    return this.reader.parseXmlToEntities()
      .then(works => _.groupBy(works, work => work.make))
      .then(groups => _.map(groups, (works, make) =>
        this.writer.create(
          `${this.output}/makes/${make || 'unknows'}/index.html`,
          this.html.toStatic(Make, { items: works, title: make })
        )
      ))
      .then(tasks => Promise.all(tasks));
  };
}


import _ from 'lodash';
import Reader from '../utils/Reader';
import Writer from '../utils/Writer';
import Html from '../utils/Html';
import Model from '../components/Pages/Model';

const INDEX_FILE = 'index.html';

export default class ModelProducer  {
  constructor (input, output) {
    this.input = input;
    this.output = output;

    this.reader = new Reader(this.input);
    this.writer = new Writer();
    this.html = new Html();
  };
  createModels = () => {
    return this.reader.parseXmlToEntities()
      .then(works => _.groupBy(works, work => `${work.make || 'unknows'}/models/${work.model || 'unknows'}.html`))
      .then(groups => _.map(groups, (works, filePath) =>
        this.writer.create(`${this.output}/makes/${filePath}`, this.html.toStatic(Model, { items: works }))
      ))
      .then(tasks => Promise.all(tasks));
  };
}

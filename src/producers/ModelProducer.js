
import _ from 'lodash';
import Reader from '../utils/Reader';
import Writer from '../utils/Writer';
import Html from '../utils/Html';
import Model from '../components/Pages/Model';

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
      .then(works => this.groupByMakeAndModel(works))
      .then(workGroups => this.createFiles(workGroups))
      .then(tasks => this.waitsFor(tasks));
  };
  groupByMakeAndModel = (works) => {
    return _.groupBy(works, work => `makes/${work.make}/models/${work.model}`);
  };
  createFiles = (workGroups) => {
    return  _.map(workGroups, (works, filePath) =>
      this.writer.create(this.getOutputPath(filePath), this.getStaticHtml(works))
    );
  };
  getStaticHtml = (works) => {
    let workName = works[0] && works[0].make || 'unknown';
    let modelName = works[0] && works[0].model || 'unknown';
    return this.html.toStatic(Model, { items: works, title: `${workName} ${modelName}` })
  };
  getOutputPath = (filePath) => {
    return `${this.output}/${filePath}.html`;
  };
  waitsFor = (tasks) => {
    return Promise.all(tasks);
  };
}

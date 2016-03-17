
import _ from 'lodash';
import Reader from '../utils/Reader';
import Writer from '../utils/Writer';
import Html from '../utils/Html';
import Make from '../components/Pages/Make';

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
      .then(works => this.groupByMake(works))
      .then(workGroups => this.createFiles(workGroups))
      .then(tasks => this.waitsFor(tasks));
  };
  groupByMake = (works) => {
    return _.groupBy(works, work => work.make)
  };
  createFiles = (workGroups) => {
    return  _.map(workGroups, (works, makeName) =>
      this.writer.create(this.getOutputPath(makeName), this.getStaticHtml(works, makeName))
    );
  };
  getStaticHtml = (works, makeName) => {
    return this.html.toStatic(Make, { items: works, title: makeName })
  };
  getOutputPath = (makeName) => {
    return `${this.output}/makes/${makeName}/index.html`;
  };
  waitsFor = (tasks) => {
    return Promise.all(tasks);
  };
}

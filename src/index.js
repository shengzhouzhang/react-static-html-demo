
import Promise from 'bluebird';
import IndexProducer from './Producers/IndexProducer';
import MakeProducer from './Producers/MakeProducer';
import ModelProducer from './Producers/ModelProducer';

export function create (input, output) {
  return Promise.all([
    new IndexProducer(input, output).createIndex(),
    new MakeProducer(input, output).createMakes(),
    new ModelProducer(input, output).createModels()
  ]);
}

create('./data/works.xml', './output')
  .then(() => console.log('done'))
  .catch(err => console.error(err));

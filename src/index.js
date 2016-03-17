
import Promise from 'bluebird';
import IndexProducer from './Producers/IndexProducer';
import MakeProducer from './Producers/MakeProducer';
import ModelProducer from './Producers/ModelProducer';

const INPUT = process.argv[2];
const OUTPUT = process.argv[3];

if (!INPUT) { throw new Error('missing input'); }
if (!OUTPUT) { throw new Error('missing output'); }

console.log('INPUT', INPUT);
console.log('OUTPUT', OUTPUT);

export function produce (input, output) {
  return Promise.all([
    new IndexProducer(input, output).createIndex(),
    new MakeProducer(input, output).createMakes(),
    new ModelProducer(input, output).createModels()
  ]);
}

produce(INPUT, OUTPUT)
  .then(() => console.log('done'))
  .catch(err => console.error(err));

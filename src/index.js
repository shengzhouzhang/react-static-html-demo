
import path from 'path'
import Producer from './Producer'

let producer = new Producer(
  path.resolve('./data/works.xml'),
  path.resolve('./output')
);

producer.createMakes()
  .then(() => console.log('done'))
  .catch(err => console.error(err));

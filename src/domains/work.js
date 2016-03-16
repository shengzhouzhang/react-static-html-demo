
export default class Work {

  constructor (id, imageUrl, make, model) {

    this._id = id;
    this.imageUrl = imageUrl;
    this.make = make && make.toLowerCase() || 'unknown';
    this.model = make && model.toLowerCase() || 'unknown';
  }
}

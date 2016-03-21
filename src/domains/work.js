
export default class Work {

  constructor (id, imageUrl, make, model, iso) {

    this._id = id;
    this.imageUrl = imageUrl;
    this.make = make && make.toLowerCase() || 'unknown';
    this.model = make && model.toLowerCase() || 'unknown';
    this.iso = iso || 'unknown';
  }
}

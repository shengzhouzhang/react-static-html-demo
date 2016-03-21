
import _ from 'lodash';
import fs from 'fs';
import Promise from 'bluebird';
import { parseString } from 'xml2js';
import Work from '../domains/Work';

export default class Reader {
  constructor (filePath) {
    this.filePath = filePath;
  };
  parseXmlToEntities = () => {
    return this.loadXml(this.filePath)
      .then(this.parseXmlToJson)
      .then(this.parseJsonToEntities);
  };
  loadXml = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, result) => {
        if (err) { return reject(new Error(`load xml error: ${err.message}`)); }
        return resolve(result);
      });
    });
  };
  parseXmlToJson = (xmlString) => {
    return new Promise((resolve, reject) => {
      parseString(xmlString, (err, result) => {
        if (err) { return reject(new Error(`parse xml error: ${err.message}`)); }
        return resolve(result);
      });
    });
  };
  parseJsonToEntities = (raw) => {
    return _.map(raw.works.work, item => {
      return new Work(
        item.id && item.id[0],
        item.urls && item.urls[0] && item.urls[0].url && item.urls[0].url[1] && item.urls[0].url[1]._,
        item.exif && item.exif[0] && item.exif[0].make && item.exif[0].make[0] || undefined,
        item.exif && item.exif[0] && item.exif[0].model && item.exif[0].model[0] || undefined,
        item.exif && item.exif[0] && item.exif[0].iso_speed_ratings && item.exif[0].iso_speed_ratings[0]
      );
    });
  };
}


import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import mkdirp from 'mkdirp';

export default class Writer {
  create = (filePath, data) => {
    return this.mkdir(filePath)
      .then(() => this.save(filePath, data));
  };
  save = (filePath, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, data, (err) => {
        if (err) { return reject(new Error(`save error: ${err.message}`)); }
        return resolve();
      });
    });
  };
  mkdir = (filePath) => {
    return new Promise((resolve, reject) => {
      mkdirp(path.dirname(filePath), (err) => {
        if (err) { return reject(new Error(`mkdir error: ${err.message}`)); }
        return resolve();
      });
    });
  };
}

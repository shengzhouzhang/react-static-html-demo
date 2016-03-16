
import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';

export default class Writer {
  constructor (dirPath) {
    this.dirPath = dirPath;
  };
  save = (fileName, data) => {
    return new Promise((resolve, reject) => {
      let filePath = this.getFilePath(this.dirPath, fileName);
      fs.writeFile(filePath, data, (err) => {
        if (err) { return reject(new Error(err.message)); }
        return resolve();
      });
    });
  };
  getFilePath = (dirPath, fileName) => {
    return path.resolve(dirPath, fileName);
  };
}

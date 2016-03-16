
import fs from 'fs';
import Promise from 'bluebird';
import { parseString } from 'xml2js';

export default function loadXmlAsJson (filePath) {
  return loadXml(filePath).then(parseXmlToJson);
}

export function loadXml (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, result) => {
      if (err) { return reject(new Error(`load xml error: ${err.message}`)); }
      return resolve(result);
    });
  });
}

export function parseXmlToJson (xmlString) {
  return new Promise((resolve, reject) => {
    parseString(xmlString, (err, result) => {
      if (err) { return reject(new Error(`parse xml error: ${err.message}`)); }
      return resolve(result);
    });
  });
}

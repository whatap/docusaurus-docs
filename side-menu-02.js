const fs = require('fs');

const whatapjson = require('./src/components/ui-text/whatap-locale.json');

const koData = require('./menu.ko');
const koMenuKey = Object.keys(koData.menuData);

// console.log(koData.menuData["usage"].title);

const enData = require('./menu.en');

// console.log(enData.menuData["usage"].title);

const jaData = require('./menu.ja');

let sid;

for (let i in koMenuKey) {
    sid = koMenuKey[i];
    const enVal = enData.menuData[`${sid}`]?.title;
    const jaVal = jaData.menuData[`${sid}`]?.title;
    const koVal = koData.menuData[`${sid}`]?.title;
    
    whatapjson[`side_${sid}`] = {
        "en": enVal,
        "ja": jaVal,
        "ko": koVal
    }
}

const whataLocale = './src/components/ui-text/whatap-locale.json';

fs.writeFileSync(whataLocale, JSON.stringify(whatapjson, null, 2), 'utf-8')

// Load the original JSON file
const localeData = JSON.parse(fs.readFileSync(whataLocale, 'utf-8'));

// Initialize objects to store split data
const enJson = {};
const jaJson = {};
const koJson = {};

// Iterate over the keys in the original JSON
for (const key in localeData) {
  if (localeData.hasOwnProperty(key)) {
    const entry = localeData[key];

    // Populate the language-specific JSON objects
    enJson[key] = entry.en;

    jaJson[key] = entry.ja;

    koJson[key] = entry.ko;
  }
}

// Write the split data to separate JSON files
fs.writeFileSync('./src/components/ui-text/en.json', JSON.stringify(enJson, null, 2));
fs.writeFileSync('./src/components/ui-text/ja.json', JSON.stringify(jaJson, null, 2));
fs.writeFileSync('./src/components/ui-text/ko.json', JSON.stringify(koJson, null, 2));

console.log('JSON files have been successfully split into en.json, ja.json, and ko.json.');

const xlsx = require('xlsx');
const crypto = require('crypto');

const generateRandomKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const keys = [];
for (let i = 0; i < 10; i++) {
  keys.push(generateRandomKey());
}

const ws = xlsx.utils.aoa_to_sheet([keys]);
const wb = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, 'Private Keys');
xlsx.writeFile(wb, 'private_keys.xlsx');

module.exports = keys;
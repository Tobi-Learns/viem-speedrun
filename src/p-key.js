const { toHex } = require('viem');
const crypto = require('crypto');

const privateKey = toHex(crypto.randomBytes(32));
console.log('Private Key:', privateKey);

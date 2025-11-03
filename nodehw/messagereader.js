const fs = require('fs');

function readMessage(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    console.log('Message read:', data);
    return data;
}

module.exports = readMessage;

const fs = require('fs');

function writeMessage(filename, message) {
    fs.writeFileSync(filename, message, 'utf8');
    console.log('Message is  written!');
}

module.exports = writeMessage;

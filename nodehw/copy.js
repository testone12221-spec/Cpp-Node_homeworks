const fs = require('fs');

function copyFile(source, destination) {
    const data = fs.readFileSync(source, 'utf8');
    fs.writeFileSync(destination, data, 'utf8');
    console.log(`Copied from ${source} to ${destination}`);
}

module.exports = copyFile;

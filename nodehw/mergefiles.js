const fs = require('fs');

function mergeFiles(file1, file2, outputFile) {
    const data1 = fs.readFileSync(file1, 'utf8');
    const data2 = fs.readFileSync(file2, 'utf8');
    fs.writeFileSync(outputFile, data1 + '\n' + data2, 'utf8');
    console.log(`${outputFile} created!`);
}

module.exports = mergeFiles;

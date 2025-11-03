const fs = require('fs');

function countWords(inputFile, outputFile) {
    const text = fs.readFileSync(inputFile, 'utf8');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    fs.writeFileSync(outputFile, `Word count: ${wordCount}`, 'utf8');
    console.log(`Word count written to ${outputFile}`);
}

module.exports = countWords;

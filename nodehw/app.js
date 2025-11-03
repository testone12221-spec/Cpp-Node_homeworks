const writeMessage = require('./messagewriter');
const readMessage = require('./messagereader');
const mergeFiles = require('./mergefiles');
const countWords = require('./count');
const copyFile = require('./copy');

// Task 1
writeMessage('message.txt', 'Hello, this is my message!');
readMessage('message.txt');

// Task 2
mergeFiles('file1.txt', 'file2.txt', 'merged.txt');

// Task 3
countWords('text.txt', 'result.txt');

// Task 4
copyFile('file1.txt', 'file1_copy.txt');

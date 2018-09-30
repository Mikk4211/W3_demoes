var fs = require('fs');

/* Omdøber en fil, i dette tilfælde mynewfile1.txt til myrenamedfile.txt */
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
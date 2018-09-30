var fs = require('fs');

/* Ligesom i demo_write_file.js bruges fs.writeFile til at erstatte noget i en fil. */
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
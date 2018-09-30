var fs = require('fs');

/* Åbner en ny fil */
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
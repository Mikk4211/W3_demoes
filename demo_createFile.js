var fs = require('fs');

/* Laver content om til en fil; hvis den ikke findes, laves den.
Denne fil lægges i samme mappe, som projektet er gemt i som udgangspunkt. */
// fs = file system
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
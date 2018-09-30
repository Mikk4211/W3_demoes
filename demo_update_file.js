var fs = require('fs');

/* Tilsætter noget tekst til enden af en fil, i dette tilfælde mynewfile1.txt.
Dette kan faktisk gentages, så den samme tekst bliver added flere gange. :P */
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
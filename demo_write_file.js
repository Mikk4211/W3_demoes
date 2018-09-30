var fs = require('fs');

/* Ændrer hvad der står i en fil (mynewfile3.txt). 
Hvis denne fil ikke findes, laves der en fil, hvori der står det, som er indtaget som param. */
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

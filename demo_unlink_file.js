var fs = require('fs');

/* 'unlinker' dvs. sletter en fil, i dette tilfælde mynewfile2.txt. 
Hvis dette step prøves at gentages sker der en fejl, da der ikke er nogen fil at slette. */
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

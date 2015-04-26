//All verses are stored in a separate file
//The verses are in a simple array
var verses = require('./song');

function verse(verseNumber){
  return verses[verseNumber - 1];
}

module.exports = {
  verse: verse
};

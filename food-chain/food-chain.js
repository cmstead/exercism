//All verses are stored in a separate file
//The verses are in a simple array
var verseSet = require('./song');

function verse(verseNumber){
  return verseSet[verseNumber - 1];
}

function verses(start, end){
  var output = '',
      current = start;

  for(; current <= end; current++){
    output += verse(current) + '\n';
  }

  return output;
}

module.exports = {
  verse: verse,
  verses: verses
};

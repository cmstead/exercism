//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

function isShouting(value){
  return value.toUpperCase() === value && value.toLowerCase() !== value;
}

function isQuestion(value){
  return value.split('').pop() === '?';
}

function isSilent(value){
  return value.trim() === '';
}

Bob.prototype.hey = function(input) {
  var response = isQuestion(input) ? 'Sure.' : 'Whatever.';

  response = isShouting(input) ? 'Whoa, chill out!' : response;

  return isSilent(input) ? 'Fine. Be that way!' : response;
};

module.exports = Bob;

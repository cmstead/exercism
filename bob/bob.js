function Bob() {};

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
  var response = 'Whatever.';

  if(isQuestion(input)){ response = 'Sure.'; }
  if(isShouting(input)){ response = 'Whoa, chill out!'; }
  if(isSilent(input)){ response = 'Fine. Be that way!'; }

  return response;
};

module.exports = Bob;

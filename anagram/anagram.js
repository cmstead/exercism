function Subject(value){
  this.base = value.toLowerCase();
  this.alphabetizedBase = value.toLowerCase().split('').sort().join('');
}

Subject.prototype = {
  checkMatch: function(base, candidate){
    var lettersMatch = this.alphabetizedBase === candidate.toLowerCase().split('').sort().join('')
    return this.base !== candidate.toLowerCase() && lettersMatch;
  },

  sanitizeCandidates: function(args){
    var sanitizedArgs = Array.prototype.slice.call(args, 0);
    return sanitizedArgs.length > 1 || typeof sanitizedArgs[0] !== 'object' ? sanitizedArgs : sanitizedArgs[0];
  },

  matches: function(candidates){
    var sanitizedCandidates = this.sanitizeCandidates(arguments),
        predicate = this.checkMatch.bind(this, this.base);

    return sanitizedCandidates.filter(predicate);
  }
};

function anagram(value){
  return new Subject(value);
}

module.exports = anagram;

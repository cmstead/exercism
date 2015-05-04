function updateCount(finalCount, token){
  var tokenCount = typeof finalCount[token] === 'number' ? finalCount[token] : 0;

  finalCount[token] = tokenCount + 1;
}

function words(input){
  var tokens = input.split(/\s+/),
      finalCount = {};

  tokens.forEach(updateCount.bind(null, finalCount));

  return finalCount;
}

module.exports = words;

function getTokenDistance(tokenA, tokenB){
  return tokenA === tokenB ? 0 : 1;
}

function computeDistance(tokenSetA, tokenSetB){
  var distance = 0;

  tokenSetA.forEach(function(token, index){
    distance += getTokenDistance(token, tokenSetB[index]);
  });

  return distance;
}

function checkChainLengths(chainA, chainB){
  if(chainA.length !== chainB.length){
    throw new Error('DNA strands must be of equal length.');
  }
}

function compute(chainA, chainB){
  var tokenSetA = chainA.split(''),
      tokenSetB = chainB.split('');

  checkChainLengths(chainA, chainB);

  return computeDistance(tokenSetA, tokenSetB);
}

module.exports = {
  compute: compute
};

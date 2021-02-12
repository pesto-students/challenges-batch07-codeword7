function sumFibs(num) {
  let n1 = 1; let n2 = 1; let
    nextTerm = 0;
  const addArr = [];
  while (nextTerm <= num) {
    // console.log(nextTerm)
    if (nextTerm % 2 !== 0) {
      addArr.push(nextTerm);
    }
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  // console.log(addArr);

  return addArr.reduce((a, b) => a + b, 0);
}
function cacheFunction(fn) {
  const cache = {};
  return function (n) { // closure to access cache obj
    if (n in cache) {
      return cache[n];
    }
    // console.log('long time...');
    cache[n] = fn(n);
    return cache[n];
  };
}

export { sumFibs, cacheFunction };

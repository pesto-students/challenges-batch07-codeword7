function duplicateLetters(...args) {
  const hashMap = {};
  // loop though the array of string and check weather the hashMap has the property
  // if it has the property add 1 else add new property and assign value 1
  for (let i = 0; i < args[0].length; i += 1) {
    const charAtHash = args[0][i];
    if (Object.prototype.hasOwnProperty.call(hashMap, charAtHash)) {
      hashMap[charAtHash] += 1;
    } else {
      hashMap[charAtHash] = 1;
    }
  }
  // console.log(hashMap)
  let highVal = 0;
  for (const value in hashMap) {
    if (hashMap[value] > highVal) {
      highVal = hashMap[value];
    }
  }
  if (highVal > 1) {
    return highVal;
  }
  return false;
}

export {
  duplicateLetters,
};

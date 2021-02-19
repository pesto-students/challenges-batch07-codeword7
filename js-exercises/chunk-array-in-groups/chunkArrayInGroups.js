function chunkArrayInGroups(array, chunkSize) {
  const resultArray = [];
  const cloneArray = [...array];
  // check the chunkSize is always smaller than size of array.
  while (cloneArray.length > chunkSize) {
    // push the first two elements of cloneArray in resultArray.
    resultArray.push(cloneArray.splice(0, chunkSize));
  }
  // if cloneArray is left with elements push the elements in resultArray.
  if (cloneArray.length) resultArray.push(cloneArray);

  return resultArray;
}

export {
  chunkArrayInGroups,
};

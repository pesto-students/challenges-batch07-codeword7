const deepCopyObject = objToCopy => {
  const clone = {};
  // check if argument passed is an object else return the argument passed.
  if (typeof (objToCopy) !== 'object') {
    return objToCopy;
  }
  // check if argument passed is null
  if (objToCopy === null) {
    return null;
  }
  // loop through each property of object.
  for (const i in objToCopy) {
    // check if typeof each property is also an object.
    // if it is then apply recursion
    if (typeof (objToCopy[i]) === 'object' && objToCopy[i] !== null) {
      clone[i] = deepCopyObject(objToCopy[i]);
    } else {
      clone[i] = objToCopy[i];
    }
  }
  return clone;
};

export { deepCopyObject };

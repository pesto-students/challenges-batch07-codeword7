const limitFunctionCallCount = (callback, timesToCall) => {
  let counter = 0;
  return (...callArgs) => {
    if (counter < timesToCall) {
      counter += 1;
      return callback(...callArgs);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};

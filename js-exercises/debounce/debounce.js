function debounce(fn, timeInMs) {
  let timerId;
  // check for proper debounce call
  if (arguments.length < 2) {
    const returnFunction = function () {
      return 'Please provide proper arguments to debounce function';
    };
    return returnFunction;
  }
  // function with debounced implementation
  const returnFunction = function execute(...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(context, args), timeInMs);
  };
  return returnFunction;
}

export { debounce };

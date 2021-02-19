function dropElements(arr, func) {
  return arr.filter(value => func(value));
}

export { dropElements };

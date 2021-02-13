const sumEvenArgs = (...args) => {
  if (args.length < 1) {
    return 0;
  }
  const evenArray = args.filter((item) => item % 2 === 0);
  if (evenArray.length < 1) {
    return 0;
  }
  const sumOfEven = evenArray.reduce((accumulator, item) => accumulator + item, 0);
  return sumOfEven;
};

export { sumEvenArgs };

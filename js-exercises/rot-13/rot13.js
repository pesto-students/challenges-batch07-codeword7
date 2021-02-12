function rot13(argument) {
  const rotCharArray = [];
  const regEx = /[A-Z]/;
  let str = argument.split('');
  // console.log(str);
  for (const x in str) {
    if (regEx.test(str[x])) {
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode(...rotCharArray);
  return str;
}

export {
  rot13,
};

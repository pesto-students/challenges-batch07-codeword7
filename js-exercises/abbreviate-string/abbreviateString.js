// import { isString } from "util";

function abbreviateString(str) {
  const strSplit = str.split(' ');
  // Split the string into array to access first and last element in string
  const firstElemStr = strSplit[0];
  const lastElemStr = strSplit[strSplit.length - 1];
  // Last's element first character access and adding '.'
  const toBeAdded = `${lastElemStr[0].toUpperCase()}.`;
  return `${firstElemStr} ${toBeAdded}`;
}

export { abbreviateString };

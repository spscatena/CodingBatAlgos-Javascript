function right2(str) {
  let firstPart = str.substring(0, str.length - 2);
  let lastPart = str.substring(str.length - 2);
  return lastPart + firstPart;

}
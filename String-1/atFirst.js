// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

// Examples

// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@

function atFirst(str) {
  let firstTwo = str.substring(0, 2);
  if (str.length === 1) {
    return str + "@";
  }
  if (str.length < 1) {
    return "@@";
  }
  return firstTwo;
}
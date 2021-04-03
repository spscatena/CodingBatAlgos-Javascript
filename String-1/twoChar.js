// Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

// Examples

// twoChar('java', 0) → ja
// twoChar('java', 2) → va
// twoChar('java', 3) → ja



function twoChar(str, index) {
  let start = str.substring(index, index + 1);
  let end = str.substring(index + 1, index + 2);
  if (index + 2 === str.length) {

    return start + end;

  }
  return str.substring(0, 2);

}

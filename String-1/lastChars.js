// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@




function lastChars(a, b) {
  let first = a.substring(0, 1);
  let last = b.substring(b.length - 1);
  if (a.length < 1 && b.length < 1) {
    return "@@";
  }
  if (a.length < 1) {
    return "@" + last;
  }
  if (b.length < 1) {
    return first + "@";
  }
  return first + last;

}
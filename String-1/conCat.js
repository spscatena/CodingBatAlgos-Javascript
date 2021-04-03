// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc

function conCat(a, b) {
  let aLast = a.substring(a.length - 1);
  let bFirst = b.substring(0, 1);
  if (aLast === bFirst) {
    return a.substring(0, a.length - 1) + b;
  }
  return a + b;
}

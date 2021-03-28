// Warmup-2 -- stringX
// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx


function stringX(str) {
  let firstLetter = str.substring(0, 1);
  let lastLetter = str.substring(str.length - 1);
  let result = "";
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] !== "x") {
      result = result + str[i];
    }
  }
  return firstLetter + result + lastLetter;
}

console.log(stringX('abxxxcd')) 
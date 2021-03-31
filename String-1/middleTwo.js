// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri".The string length will be at least 2.


function middleTwo(str) {
  let firstPart = str.substring(0, str.length / 2);
  let secondPart = str.substring(str.length / 2);
  return firstPart.substring(firstPart.length - 1) + secondPart.substring(0, 1);
}

console.log(middleTwo("window"))

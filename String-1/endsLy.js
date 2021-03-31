// Given a string, return true if it ends in "ly".

// Examples

// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false

function endsLy(str) {
  let lastTwo = str.substring(str.length - 2);
  if (lastTwo === "ly") {
    return true;
  }
  return false;
}

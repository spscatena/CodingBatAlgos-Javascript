
// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false




function hasBad(str) {
  let one = str.substring(0, 3);
  let two = str.substring(1, 4);

  if (one === "bad" || two === "bad") {
    return true;
  }
  return false;
}

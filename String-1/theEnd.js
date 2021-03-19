function theEnd(str, front) {
  if (front === true) {
    return str.substring(0, 1);
  } else {
    return str.substring(str.length - 1);
  }
}
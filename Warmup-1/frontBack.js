function frontBack(str){
  let first = str.substring(0,1);
  let last = str.substring(str.length-1);
  let middle = str.substring(1, str.length-1);
  if (str.length < 2) {
    return str;
  } else {
  return last + middle + first;
}



function notString(str){
  let firstThree = str.substring(0, 3); 
  if (firstThree !== "not") {
    return "not " + str;
  } else {
    return str;
  }
}







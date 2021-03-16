function endUp(str){
  let lastThree = str.substring(str.length-3);
  let firstPart = str.substring(0, str.length-3);
  if (str.length >= 3) {
    return firstPart + lastThree.toUpperCase();; 
}
  return str.toUpperCase();
}



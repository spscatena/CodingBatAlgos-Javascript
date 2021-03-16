function missingChar(str, n){
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (i === n) {
      continue; 
      newString = newString + charAt(i);
    }
  }
  return newString;
}

// function missingchar(str, n) {
//   let front = str.substring(0, n);
//   let back = str.substring(n+1)
//   return front + back;
  
// }
    
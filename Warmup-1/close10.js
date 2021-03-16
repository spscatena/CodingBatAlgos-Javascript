function close10(a, b) {
  let aDiff = Math.abs(10-a);
  let bDiff = Math.abs(10-b);
  
  if (aDiff < bDiff) {
    return a;
}
  if (bDiff < aDiff) {
    return b;
  }
  return 0;





// function close10(a, b){
  
//   if (Math.abs(a - 10) === Math.abs(10 - b)) {
//     return 0;
//   }
  
//   if (a === 10 || b === 10) {
//     return 10;
//   }
  
//   if (Math.abs(10-a) < Math.abs(10 - b)){
//     return a;
//   }

//   if (Math.abs(10 - b) < Math.abs(10 - a)){
//     return b;
//   }

// }






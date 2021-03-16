function loneTeen(a, b){
//   let aTeen = (a>12 && a<20)
//   let bTeen = (b>12 && b<20)
  
//   if (aTeen !== bTeen) {
//     return true; 
//   }
//   return false;
// }


  if ((a > 12 && a < 20) && (b < 13 || b > 19)) {
    return true;
}
    if ((b > 12 && b < 20) && (a < 13 || a > 19)) {
    return true;
  }
  if ((a < 13 || a > 19) && (b < 13 || b > 19)) {
    return false;
 }
  if ((a>12 && a < 20) && (b>12 && b < 20)){
    return false;
}

}





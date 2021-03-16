function max1020(a, b){ // 9, 21
   
if ((a >= 10 && a <=20) && (b >= 10 && b <=20)) {
    if (a > b) {
     return a;
  }

    if (b > a) {
    return b;
  }
}
  
 if (a >= 10 && a <=20) {
  return a;
}
  
if (b >= 10 && b <=20) {
    return b; 
 }
  return 0;
}




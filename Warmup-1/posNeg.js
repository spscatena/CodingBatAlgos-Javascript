function posNeg(a, b, negative){
  
  if (negative === false 
      && ((a < 0 && b > 0) || (a > 0 && b < 0))) {
    return true; 
  }
  
  if (negative === true && a < 0 && b < 0) {
    return true; 
 
  }
  
  return false; 
  
}

function stringE(str){
  let eCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'e') {
      eCount++
    }
}
 if (eCount >= 1 && eCount < 4){
   return true; 
 }
  return false;
}





function front3(str){
  let front = str.substring(0, 3); 
  if (front < 3) {
      return str + str + str; 
  } else {
    return front + front + front;
  }
}







function delDel(str){
  let first = str.substring(0,1);
  let del = str.substring(1, 4);
  let last = str.substring(4);
  if (del === "del") {
    return first + last;
}
  return str; 
}








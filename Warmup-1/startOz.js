function startOz(str){
  let firstTwo = str.substring(0,2);
  let first = str.substring(0,1);
  let second = str.substring(1,2); 
  if (firstTwo === "oz"){
    return "oz"; 
  }
  if (first === "o") {
    return "o"
  }
  if (second === "z") {
    return "z"
  }
  if (firstTwo !== "oz"){
      return "";
 }
}

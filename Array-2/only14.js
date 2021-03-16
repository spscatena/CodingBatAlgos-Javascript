function only14(nums) {
  let trueCount = 0;
  let totalCount = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== undefined) {
      if (nums[i] === 1 || nums[i] === 4) {
        trueCount++;
      }
    }
    if (trueCount === totalCount) {
      return true;
    }
  }
  return false;
}
console.log(only14([]));
/*
[2,7,11,15]
9
[3,2,4]
6
[3,3]
6
*/
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i < j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
  return [];
}
console.log(twoSum([3,4,2], 6));//[1,2]
console.log(twoSum([2, 5, 5, 11], 10));//[1,5]
console.log(twoSum([3,3], 6));//[0,1]

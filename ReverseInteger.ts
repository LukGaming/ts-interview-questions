function reverse(x: number): number {
  let rest = 0;
  let currentDivision = x;
  let canDivide = true;
  let result: number[] = [];
  
  let max = 2e32 -1 
  let min = (2e32 - 1) * -1
  console.log(min, max, x);
  if (x >= max || x <= min) {
    return 0;
  }
  if (x < 0) {
    currentDivision = currentDivision * -1;
  }
  while (canDivide) {
    if (currentDivision > 9) {
      rest = currentDivision % 10;
      currentDivision = Math.floor(currentDivision / 10);
    } else {
      canDivide = false;
      rest = Math.floor(currentDivision);
    }
    result.push(rest);
  }
  if (x < 0) {
    return Number(result.join("")) * -1;
  }
  return Number(result.join(""));
}
console.log(reverse(1534236469));

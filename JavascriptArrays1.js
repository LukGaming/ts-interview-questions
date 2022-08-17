var arr = [1, 2, 3, "teste", true];
var isNumber = arr.every((x) => {
  return typeof x === "number";
});
console.log(isNumber);

var hasNumber = arr.some((x) => {
  console.log(x);
  return typeof x === "number";
});
console.log(hasNumber);

var onlyNumbers = arr.filter((x) => {
  if (typeof x === "number") {
    return x;
  }
});
console.log(onlyNumbers);

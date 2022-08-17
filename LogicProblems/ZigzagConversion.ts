function convert(s: string, numRows: number): string {
  if (numRows == 1) {
    return s;
  }
  let finalList: any[] = [];
  let count = 0;
  let newNumRows = numRows - 1;
  let direction = "down";
  for (let i = 0; i < numRows; i++) {
    finalList.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    finalList[count].push(element)
    if(count === newNumRows){
        count++
    }
  }

  return finalList.reduce((acc, elem) => acc.concat(elem), []).join('')
}
console.log(convert("PAYPALISHIRING", 3));

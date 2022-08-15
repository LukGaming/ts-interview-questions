function lengthOfLongestSubstring(s: string): number {
  let stack: any = {};
  let currentStack: any = {};
  if(s.length === 1) return 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] in currentStack) {
      stack[i] = currentStack;
      currentStack = {};
      currentStack[s[i]] = true
    } else {
      currentStack[s[i]] = true;
      if(!s[i+1]){
        stack[i] = currentStack;
      }
    }
  }
  let higherLength = 0;
  for(let key in stack){
    if(Object.keys(stack[key]).length >= higherLength){
        higherLength = Object.keys(stack[key]).length
    }
  }
  return higherLength;
}
console.log(lengthOfLongestSubstring("dvdf"));

/*
[pw]
[wke]
[w]


*/

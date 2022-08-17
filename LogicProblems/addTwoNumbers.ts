class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | void) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let finalNode = new ListNode()
  let stack: number[] = [];
  let val1 = l1;
  let val2 = l2;
  var rest = 0;
  while (val1 || val2) {
    if (val1?.val && val2?.val) {
      let sum1 = val1.val + val2?.val + rest;
      if (sum1 > 9) {
        let valueWithoutRest = sum1.toString().split("")[1];
        while (sum1 > 9) {
          rest++;
          sum1--;
        }
        stack.push(Number(valueWithoutRest));
      } else {
        rest = 0;
        stack.push(sum1);
      }
    }
    if (val1?.next) {
      val1 = val1?.next;
    } else {
      val1 = null;
    }
    if (val2?.next) {
      val2 = val2?.next;
    } else {
      val2 = null;
    }
  }
  let currentStack = finalNode;
  for (let i = 0; i < stack.length; i++) {
    let node = new ListNode(stack[i]);
    currentStack.next = node;
    currentStack = currentStack.next
  }
  return currentStack;
}
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));


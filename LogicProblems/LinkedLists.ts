class ListNode {
  val: number;
  next?: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  printLinkedList(head: ListNode | null) {
    let current: ListNode | null = head;
    while (current != null) {
      console.log(current.val);
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
  }
  printLinkedListRecursively(head: ListNode | null) {
    if (head == null) return;
    console.log(head.val);
    if (head.next) this.printLinkedListRecursively(head?.next);
    else return;
  }
  getListValues(head: ListNode | null) {
    const values: Array<number> = [];
    let current = head;
    while (current) {
      values.push(current.val);
      if (current.next) current = current.next;
      else current = null;
    }
    return values;
  }
  getListRecursively(head: ListNode | null) {
    const values: Array<number> = [];
    this.handleListRecursively(head, values);
    return values;
  }
  handleListRecursively(currentNode: ListNode | null, values: Array<number>) {
    if (currentNode == null) return;
    values.push(currentNode.val);
    if (currentNode.next) {
      this.handleListRecursively(currentNode?.next, values);
    } else {
      return;
    }
  }
  sumListUsingWhile(head: ListNode | null) {
    let sum = 0;
    let current = head;
    while (current) {
      sum += current.val;
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
    return sum;
  }
  sumListUsingRecusivity(head: ListNode | null): number {
    if (head == null) return 0;
    if (head.next != null) {
      return Number(head?.val + this.sumListUsingRecusivity(head?.next));
    } else {
      return head.val;
    }
  }
  findValueWithWhile(head: ListNode | null, target: number): boolean {
    if (head?.val == target) return true;
    let current = head;
    while (current) {
      if (current.val == target) return true;
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
    return false;
  }
  findValueWithRecursivity(head: ListNode | null, target: number): boolean {
    if (head == null) return false;
    if (head.val == target) return true;
    return this.findValueWithRecursivity(
      head?.next ? head?.next : null,
      target
    );
  }
  findValAtIndexRecursively(
    head: ListNode | null,
    index: number
  ): number | null {
    if (head == null) return null;
    if (index == 0) return head.val;
    return this.findValAtIndexRecursively(
      head.next ? head.next : null,
      index - 1
    );
  }
  findValAtIndexWhile(head: ListNode | null, index: number): number | null {
    if (head == null) return null;
    if (index == 0) return head.val;
    let current: ListNode | null = head;
    let count = 0;
    while (current) {
      if (index == count) return current.val;
      count++;
      if (current?.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
    return null;
  }
  mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    let currentL1 = list1;
    let currentL2 = list2;
    let mergedList: ListNode | null = null;
    while (currentL1 !== null && currentL2 !== null) {
      if (mergedList == null) mergedList = currentL1;
      else {
        if (currentL1 !== null) {
          mergedList.next = currentL1;
          mergedList = mergedList.next;
          if (currentL1.next) {
            currentL1 = currentL1.next;
          } else {
            currentL1 = null;
          }
        }
        if (currentL2 !== null) {
          mergedList.next = currentL2;
          mergedList = mergedList.next;
          if (currentL2.next) {
            currentL2 = currentL2.next;
          } else {
            currentL2 = null;
          }
        }
      }
    }
    return mergedList
  }
}
const node1 = new ListNode(10);
const node2 = new ListNode(20);
const node3 = new ListNode(30);
node1.next = node2;
node2.next = node3;


const node4 = new ListNode(15);
const node5 = new ListNode(25);
const node6 = new ListNode(35);
node4.next = node5;
node5.next = node6;





const linkedList = new LinkedList();
console.log(linkedList.mergeTwoLists(node1, node4));

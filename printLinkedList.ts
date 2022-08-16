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
  printLinkedListRecursively(head: ListNode | null){
    if(head == null) return
    console.log(head.val)
    if(head.next)this.printLinkedListRecursively(head?.next)
    else return
  }
}

const node1 = new ListNode(10);
const node2 = new ListNode(20);

node1.next = node2;

const linkedList = new LinkedList();
linkedList.printLinkedListRecursively(node1);

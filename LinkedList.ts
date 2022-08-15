class NodeTree {
  value: number;
  next: NodeTree | null;
  constructor(value: number, next: NodeTree | null = null) {
    this.value = value;
    this.next = next;
  }
}
class linkedList {
  public head: NodeTree | null;
  public size: number = 0;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(value: number) {
    this.head = new NodeTree(value, this.head);
  }
  getTail() {
    var node: NodeTree | null = this.head;
    while (node?.next !== null) {
      if (node?.next) {
        node = node?.next;
      }
    }
    return node;
  }
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  insertLast(data: NodeTree) {
    let node = new NodeTree(data?.value);
    let current;
    if (data !== null) {
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
        while (current) {
          current = current.next;
        }
        if (current.next == null && node !== null) {
          current.next = node;
        }
      }
      this.size++;
    }
  }
  addAtIndex(data: NodeTree, index: number) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(data.value);
      return;
    }
    const node = new NodeTree(data);
  }
}
let nodeTree = new NodeTree(100);
nodeTree.next = new NodeTree(200);
let ll = new linkedList();
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(100);

console.log(ll.insertLast(new NodeTree(500)));

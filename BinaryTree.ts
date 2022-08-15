class NodeTree {
  value: any;
  left?: NodeTree;
  
  right?: NodeTree;

  constructor(value: any, left?: NodeTree, right?: NodeTree) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  getValue() {
    return this.value;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
}

let firstNode = new NodeTree(
  "a",
  new NodeTree(
    "b",
    new NodeTree("d", new NodeTree("h", new NodeTree("y"),), new NodeTree("j")),
    new NodeTree("e")
  ),
  new NodeTree("c", new NodeTree("f"), new NodeTree("g"))
);

//                  a
//               /     \
//              b        c
//             /  \     / \
//            d    e   f   g
//           / \
/*          h   j
//         /
          y
//Binary Tree
    constructor
    depth transversal use stacks
    pre-order -> root, left, right
    in-order -> left, root, right
    post-order -> right, root, left
    breadth transversal use queue
*/

class BinaryTree {
  preOrderRecursive(root?: NodeTree) {
    if (root) {
      console.log(root.getValue());
      this.preOrderRecursive(root.getLeft());
      this.preOrderRecursive(root.getRight());
    }
  }
  inOrderRecursive(root?: NodeTree) {
    if (root) {
      this.inOrderRecursive(root.getLeft());
      console.log(root.getValue());
      this.inOrderRecursive(root.getRight());
    }
  }
  postOrderRecursive(root?: NodeTree) {
    if (root) {
      this.postOrderRecursive(root.getRight());
      console.log(root.getValue());
      this.postOrderRecursive(root.getLeft());
    }
  }
  DFS(root: NodeTree) {
    var stack: any = [];
    stack.push(root);
    while (stack.length > 0) {
      var node = stack.pop();
      console.log(node.getValue());
      if (node.getRight()) {
        stack.push(node.getRight());
      }
      if (node.getLeft()) {
        stack.push(node.getLeft());
      }
    }
  }
  TreeHeight(root?: NodeTree): number {
    if (root) {
      return Math.max(
        this.TreeHeight(root?.getLeft()),
        this.TreeHeight(root?.getRight()) + 1
      );
    } else {
      return 0;
    }
  }
}
var root = new BinaryTree();
console.log(root.TreeHeight(firstNode));

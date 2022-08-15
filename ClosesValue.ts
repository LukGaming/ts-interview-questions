class NodeTree {
  private value: any;
  private left?: NodeTree;
  private right?: NodeTree;

  constructor(value: any, left?: NodeTree, right?: NodeTree) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  getValue(): number {
    
    return this.value;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
}

class BinarySeachTree {
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
    while (stack.length > 0) {
      var node = stack.pop();
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
  findClosestValue(
    root: any,
    searchedValue: number,
    closest: number
  ): number {
    let currentClosest = closest;
    //When  to stop
    // if node is the value we are search for, then return
    if (root?.getValue() == searchedValue) {
      return root?.getValue();
    }
    //if the left and right are null then return currentCloses
    else if (!root.getLeft() && !root.getRight()) {
      return currentClosest;
    } 
    //if node value minus searched value is less or equal closes
    //then currentClosest receives value
    if (Math.abs(Number(root.getLeft()) - searchedValue) <= closest) {
      currentClosest = root.getValue();
    }
    //if the value is less than searched value and the left child is not null
    // or
    //if the value is greater than searchedvalue and the right child is not null
    if (
      (root.getValue() < searchedValue && root.getLeft) ||
      (root.getValue() > searchedValue && root.getRight)
    ) {
      //if left is less than the searched value
      if (root.getLeft().getValue() < searchedValue) {
        //call recursive for left
        this.findClosestValue(root?.getLeft(), searchedValue, currentClosest);
      }
      //if right is greater than the searched value
      else if (root.getRight().getValue() > searchedValue) {
        //call recursive for right
        this.findClosestValue(root.getRight().getValue(), searchedValue, currentClosest);
      }
    }
    return currentClosest;
  }
}
let firstNode = new NodeTree(
  5,
  new NodeTree(2, new NodeTree(1), new NodeTree(4)),
  new NodeTree(8, new NodeTree(7), new NodeTree(12))
);
/*
  //                  5
  //               /     \
  //              2        8
  //             /  \     / \
  //            1   4   7   12
  //          
  //         
              
    //Binary Tree
        constructor
        depth transversal use stacks
        pre-order -> root, left, right
        in-order -> left, root, right
        post-order -> right, root, left
        breadth transversal use queue
    */

/*
Exercise: Given a number, find the closes value in a binary tree
    tips: 
        make use of the fact its a binary search tree and we know the rule 
        of left child is less than the parent and the right child
        is greater than parent
*/

var root = new BinarySeachTree();
console.log(root.findClosestValue(firstNode, 7.3, firstNode.getValue()));
console.log(root.findClosestValue(firstNode, 7.6, firstNode.getValue()));

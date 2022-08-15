class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let count = 0;
  if (root.left) {
    count += countOfNodes(root.left, count);
  }
  if (root.right) {
    count += countOfNodes(root.right, count);
  }
  return count + 1;
}

function countOfNodes(node: TreeNode | null, count: number): number {
  if (node?.val) {
    count++;
    countOfNodes(node?.left, count);
    countOfNodes(node?.right, count);
  }
  return count;
}
let nodes = new TreeNode(1, new TreeNode(2));
console.log(countNodes(nodes));

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

function sumNumbers(root: TreeNode | null): number {
  let finalRootSum: any[] = [];
  if (root == null) {
    return 0;
  }
  findRootToLeafNumber(root, 0, finalRootSum);
  let finalSum = finalRootSum.reduce((a, b) => {
    return a + b;
  });
  return finalSum;
}
function findRootToLeafNumber(
  node: TreeNode | null,
  currentSum: number,
  finalRootSum: any[]
) {
  if (node?.left == null && node?.right == null) {
    currentSum = currentSum * 10;
    if (node?.val) {
      currentSum += node.val;
    }
    finalRootSum.push(currentSum)
    return;
  } else {
    currentSum = currentSum * 10;
    if (node?.val) {
      currentSum += node.val;
    }
    if (node.left) {
      findRootToLeafNumber(node.left, currentSum, finalRootSum);
    }
    if (node.right) {
      findRootToLeafNumber(node.right, currentSum, finalRootSum);
    }
  }
}

let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(tree));

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

function isValidBST(root: TreeNode | null): boolean {
  if (root) {
    if (root.val) {
      if (root?.left?.val) {
        if (root?.left?.val < root.val) {
          isValidBST(root.left);
        } else {
          return false;
        }
      }
      if (root?.right?.val) {
        if (root?.right?.val > root.val) {
          isValidBST(root.right);
        } else {
          return false;
        }
      }
    }
  }
  return true;
}
var teste = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(1, new TreeNode(4, new TreeNode(3), new TreeNode(6)))
);
console.log(isValidBST(teste));

/*
    [5,4,6,null,null,3,7]
                    5
                      
                4       3 
            6          7  
         null, null

*/

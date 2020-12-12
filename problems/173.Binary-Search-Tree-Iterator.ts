// TS
// Runtime: 148 ms, faster than 91.67% of TypeScript online submissions for Binary Search Tree Iterator.
// Memory Usage: 50.5 MB, less than 50.00% of TypeScript online submissions for Binary Search Tree Iterator.
class BSTIterator {
  nums: number[] = [];
  curr: number = 0;

  constructor(root: TreeNode | null) {
    this.inOrderTraverse(root);
  }

  private inOrderTraverse(node: TreeNode | null) {
    if (!node) return;
    this.inOrderTraverse(node.left);
    this.nums.push(node.val);
    this.inOrderTraverse(node.right);
  }

  next(): number {
    return this.nums[this.curr++];
  }

  hasNext(): boolean {
    return this.curr < this.nums.length;
  }
}

// JS
// Runtime: 124 ms, faster than 100.00% of JavaScript online submissions for Binary Search Tree Iterator.
// Memory Usage: 51.1 MB, less than 8.10% of JavaScript online submissions for Binary Search Tree Iterator.
// var BSTIterator = function (root) {
//   this.nums = [];
//   this.curr = 0;

//   const inOrderTraverse = (node) => {
//     if (!node) return;
//     inOrderTraverse(node.left);
//     this.nums.push(node.val);
//     inOrderTraverse(node.right);
//   };

//   inOrderTraverse(root);
// };

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function () {
//   return this.nums[this.curr++];
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function () {
//   return this.curr < this.nums.length;
// };

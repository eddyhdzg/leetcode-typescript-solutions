// TS
function flatten(root: TreeNode | null): void {
  if (!root) return;
  const stack: TreeNode[] = [root];

  while (stack.length) {
    const curr = stack.pop()!;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);

    if (stack.length) curr.right = stack[0];
    curr.left = null;
  }
}

// JS
var flatten = function (root) {
  if (!root) return;
  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);

    if (stack.length) curr.right = stack[stack.length - 1];
    curr.left = null;
  }
};

// JS
// Runtime: 108 ms, faster than 76.89% of JavaScript online submissions for Delete Node in a BST.
// Memory Usage: 46.4 MB, less than 5.18% of JavaScript online submissions for Delete Node in a BST.
const successor = (node) => {
  node = node.right;
  while (node.left) {
    node = node.left;
  }
  return node.val;
};

const predecessor = (node) => {
  node = node.left;
  while (node.right) {
    node = node.right;
  }
  return node.val;
};

var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.left) {
    root.val = predecessor(root);
    root.left = deleteNode(root.left, root.val);
  } else if (root.right) {
    root.val = successor(root);
    root.right = deleteNode(root.right, root.val);
  } else {
    root = null;
  }
  return root;
};

// TS
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Delete Node in a BST.
// Memory Usage: 46.1 MB, less than 25.00% of TypeScript online submissions for Delete Node in a BST.
const successor = (node: TreeNode): number => {
  node = node.right as TreeNode;
  while (node.left) {
    node = node.left;
  }
  return node.val;
};

const predecessor = (node: TreeNode): number => {
  node = node.left as TreeNode;
  while (node.right) {
    node = node.right;
  }
  return node.val;
};

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.left) {
    root.val = predecessor(root);
    root.left = deleteNode(root.left, root.val);
  } else if (root.right) {
    root.val = successor(root);
    root.right = deleteNode(root.right, root.val);
  } else {
    root = null;
  }
  return root;
}

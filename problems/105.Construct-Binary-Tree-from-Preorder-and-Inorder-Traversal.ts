function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null;
  const idx = inorder.indexOf(preorder[0]);
  const root = new TreeNode(inorder[idx]);
  root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
  root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1));
  return root;
}

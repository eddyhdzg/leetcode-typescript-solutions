// TS
function isSubtree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (!s) return false;
  return isSubtreeEqual(s, t) || isSubtree(s.right, t) || isSubtree(s.left, t);
}

const isSubtreeEqual = (s: TreeNode | null, t: TreeNode | null) => {
  if (!s && !t) return true;
  if (!s || !t) return false;
  return (
    s.val === t.val &&
    isSubtreeEqual(s.left, t.left) &&
    isSubtreeEqual(s.right, t.right)
  );
};

// JS
// var isSubtree = function (s, t) {
//   if (!s) return false;

//   return isSubtreeEqual(s, t) || isSubtree(s.right, t) || isSubtree(s.left, t);
// };

// const isSubtreeEqual = (s, t) => {
//   if (!s && !t) return true;
//   if (!s || !t) return false;
//   return (
//     s.val === t.val &&
//     isSubtreeEqual(s.left, t.left) &&
//     isSubtreeEqual(s.right, t.right)
//   );
// };

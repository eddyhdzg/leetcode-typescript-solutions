const match = (value: number) => {
  return new RegExp('(?<!-)(-{' + value + '})(?!-)', 'g');
};

const getNumber = (S: string) => {
  const stop = S.indexOf('-');
  return Number(S.slice(0, stop !== -1 ? stop : S.length));
};

function recoverFromPreorder(S: string): TreeNode | null {
  if (!S.length) return null;
  return helper(S, 0);
}

const helper = (S: string, depth: number): TreeNode | null => {
  if (!S.length) return null;
  const newDepth = depth + 1;
  const newNode = new TreeNode(getNumber(S));

  const leftIndex = S.search(match(newDepth));
  // Case 1: Leaf
  if (leftIndex == -1) return newNode;

  const leftStart = leftIndex + newDepth;
  const rightIndex = S.slice(leftStart).search(match(newDepth));
  // Case 2: One Child
  if (rightIndex === -1) {
    newNode.left = helper(S.slice(leftStart), newDepth);
    return newNode;
  }

  // Case 3: Two Children
  const rightStart = leftStart + rightIndex + newDepth;
  newNode.left = helper(S.slice(leftStart, leftStart + rightIndex), newDepth);
  newNode.right = helper(S.slice(rightStart), newDepth);
  return newNode;
};

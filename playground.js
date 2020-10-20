/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map([null, null]);

  let curr = head;

  while (curr) {
    map.set(curr, new Node(curr.val, null, null));
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const currClone = map.get(curr);
    currClone.next = map.get(curr.next);
    currClone.random = map.get(curr.random);
  }

  return map.get(head);
};

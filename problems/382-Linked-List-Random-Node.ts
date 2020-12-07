// Without Follow-up
class Solution {
  head: ListNode | null;
  length: number;
  constructor(head: ListNode | null) {
    this.head = head;
    this.length = this.getLength();
  }

  getLength(): number {
    let len = 0;
    let curr = this.head;
    while (curr) {
      len++;
      curr = curr.next;
    }
    return len;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandom(): number {
    let curr = this.head;
    let jumps = this.getRandomInt(this.length);
    while (jumps) {
      jumps--;
      curr = curr!.next;
    }
    return curr!.val;
  }
}

// Binary Search
// Runtime: 80 ms, faster than 46.81% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
// Memory Usage: 37.4 MB, less than 9.09% of JavaScript online submissions for Find Smallest Letter Greater Than Target.

const binarySearch = (letters: string[], target: string): number => {
  let l = 0;
  let r = letters.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (
      (letters[mid] === target && letters[mid + 1] !== target) ||
      (letters[mid] < target && letters[mid + 1] > target)
    ) {
      return mid + 1;
    }

    if (letters[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return -1;
};

function nextGreatestLetter(letters: string[], target: string): string {
  const index = binarySearch(letters, target);
  return index !== -1 ? letters[index] : letters[0];
}

// FindIndex
// Runtime: 84 ms, faster than 37.08% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
// Memory Usage: 37.7 MB, less than 9.09% of JavaScript online submissions for Find Smallest Letter Greater Than Target.

function nextGreatestLetter(letters: string[], target: string): string {
  const index = letters.findIndex((letter) => letter > target);
  return index !== -1 ? letters[index] : letters[0];
}

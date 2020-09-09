function indexEqualsValueSearch(arr) {
  const first = bs(arr);
  for (let i = first; i < arr.length; i++) {
    if (arr[i] === i) return i;
  }

  return -1;
}

function bs(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < 0) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

indexEqualsValueSearch([0]);
indexEqualsValueSearch([0, 3]);
indexEqualsValueSearch([-8, 0, 1, 3, 5]);

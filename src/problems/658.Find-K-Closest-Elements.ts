// Window
// O(n)
function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (right - left >= k) {
    x - arr[left] <= arr[right] - x ? right-- : left++;
  }

  return arr.slice(left, right + 1);
}

// Distance Sort
// O(nlogn)
// function findClosestElements(arr: number[], k: number, x: number): number[] {
//   const map: { [key: string]: number } = {};

//   arr.forEach((num) => {
//     map[num] = Math.abs(x - num);
//   });

//   const sorted = [...arr].sort((a, b) => map[a] - map[b]);
//   const res = sorted.slice(0, k).sort((a, b) => a - b);
//   return res;
// }

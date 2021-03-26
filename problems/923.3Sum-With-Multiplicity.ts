// TS
function threeSumMulti(arr: number[], target: number): number {
  const map = new Map<number, number>();
  const mod = 1000000007;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = (res + (map.get(target - arr[i]) || 0)) % mod;

    for (let j = 0; j < i; j++) {
      let temp = arr[i] + arr[j];
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  }

  return res;
}

// JS
// var threeSumMulti = function (arr, target) {
//   const map = new Map();
//   const mod = 1000000007;
//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     res = (res + (map.get(target - arr[i]) || 0)) % mod;

//     for (let j = 0; j < i; j++) {
//       let temp = arr[i] + arr[j];
//       map.set(temp, (map.get(temp) || 0) + 1);
//     }
//   }

//   return res;
// };

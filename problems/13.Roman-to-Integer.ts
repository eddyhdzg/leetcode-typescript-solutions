// TS
// Runtime: 172 ms, faster than 70.96% of TypeScript online submissions for Roman to Integer.
// Memory Usage: 45.7 MB, less than 91.78% of TypeScript online submissions for Roman to Integer.
const hash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let ans = hash[s[s.length - 1]];

  for (let i = 0; i < s.length - 1; i++) {
    if (hash[s[i]] < hash[s[i + 1]]) ans -= hash[s[i]];
    else ans += hash[s[i]];
  }

  return ans;
}

// JS
// Runtime: 152 ms, faster than 95.38% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 43.7 MB, less than 99.20% of JavaScript online submissions for Roman to Integer.
// const hash = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   function romanToInt(s: string): number {
//     let ans = hash[s[s.length - 1]];

//     for (let i = 0; i < s.length - 1; i++) {
//       if (hash[s[i]] < hash[s[i + 1]]) ans -= hash[s[i]];
//       else ans += hash[s[i]];
//     }

//     return ans;
//   }

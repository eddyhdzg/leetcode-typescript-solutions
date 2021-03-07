// TS
const canBeFormed = (s: string, d: string) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < d.length) {
    if (s[i] === d[j]) j++;
    i++;
  }

  return j === d.length;
};

function findLongestWord(s: string, d: string[]): string {
  const res = d
    .filter((word) => canBeFormed(s, word))
    .sort((a, b) => b.length - a.length || a.localeCompare(b));

  return res.length ? res[0] : '';
}

// JS
// const canBeFormed = (s, d) => {
//     let i = 0;
//     let j = 0;

//     while (i < s.length && j < d.length) {
//       if (s[i] === d[j]) j++;
//       i++;
//     }

//     return j === d.length;
//   };

//   var findLongestWord = function (s, d) {
//     const res = d
//       .filter((word) => canBeFormed(s, word))
//       .sort((a, b) => b.length - a.length || a.localeCompare(b));

//     return res.length ? res[0] : '';
//   };

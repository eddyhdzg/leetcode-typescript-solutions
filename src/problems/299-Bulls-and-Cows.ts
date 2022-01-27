// TS
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Bulls and Cows.
// Memory Usage: 40.3 MB, less than 40.00% of TypeScript online submissions for Bulls and Cows.
function getHint(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else if (secret[i] in hash) hash[secret[i]]++;
    else hash[secret[i]] = 1;
  }

  for (let i = 0; i < guess.length; i++) {
    if (secret[i] !== guess[i] && hash[guess[i]]) {
      cows++;
      hash[guess[i]]--;
    }
  }

  return `${bulls}A${cows}B`;
}

// JS
// Runtime: 84 ms, faster than 88.14% of JavaScript online submissions for Bulls and Cows.
// Memory Usage: 39.3 MB, less than 46.05% of JavaScript online submissions for Bulls and Cows.
// var getHint = function (secret, guess) {
//   let bulls = 0;
//   let cows = 0;
//   const hash = {};

//   for (let i = 0; i < secret.length; i++) {
//     if (secret[i] === guess[i]) {
//       bulls++;
//     } else if (secret[i] in hash) hash[secret[i]]++;
//     else hash[secret[i]] = 1;
//   }

//   for (let i = 0; i < guess.length; i++) {
//     if (secret[i] !== guess[i] && hash[guess[i]]) {
//       cows++;
//       hash[guess[i]]--;
//     }
//   }

//   return `${bulls}A${cows}B`;
// };

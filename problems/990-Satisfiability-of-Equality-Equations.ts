// TS
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Satisfiability of Equality Equations.
// Memory Usage: 42.3 MB, less than 100.00% of TypeScript online submissions for Satisfiability of Equality Equations.

function equationsPossible(equations: string[]): boolean {
  const uf: { [key: string]: string } = {};

  // Initialize
  equations.forEach(([char1, , , char2]) => {
    if (!uf[char1]) uf[char1] = char1;
    if (!uf[char2]) uf[char2] = char2;
  });

  const find = (x: string): string => {
    return uf[x] === x ? x : find(uf[x]);
  };

  const union = (a: string, b: string) => {
    const aParent = uf[find(a)];
    const bParent = uf[find(b)];

    while (a !== aParent) {
      const nextA = uf[a];
      uf[a] = aParent;
      a = nextA;
    }

    while (b !== aParent) {
      const nextB = uf[b];
      uf[b] = aParent;
      b = nextB;
    }
  };

  equations.forEach(([a, s, , b], index) => {
    if (s === '=') union(a, b);
  });

  for (let i = 0; i < equations.length; i++) {
    const [a, s, , b] = equations[i];
    if (s === '!') {
      if (find(uf[a]) === find(uf[b])) return false;
    }
  }

  return true;
}

// JS
// Runtime: 104 ms, faster than 21.43% of JavaScript online submissions for Satisfiability of Equality Equations.
// Memory Usage: 42.2 MB, less than 7.14% of JavaScript online submissions for Satisfiability of Equality Equations.
// var equationsPossible = function (equations) {
//   const uf = {};

//   // Initialize
//   equations.forEach(([char1, , , char2]) => {
//     if (!uf[char1]) uf[char1] = char1;
//     if (!uf[char2]) uf[char2] = char2;
//   });

//   const find = (x) => {
//     return uf[x] === x ? x : find(uf[x]);
//   };

//   const union = (a, b) => {
//     const aParent = uf[find(a)];
//     const bParent = uf[find(b)];

//     while (a !== aParent) {
//       const nextA = uf[a];
//       uf[a] = aParent;
//       a = nextA;
//     }

//     while (b !== aParent) {
//       const nextB = uf[b];
//       uf[b] = aParent;
//       b = nextB;
//     }
//   };

//   equations.forEach(([a, s, , b], index) => {
//     if (s === '=') union(a, b);
//   });

//   for (let i = 0; i < equations.length; i++) {
//     const [a, s, , b] = equations[i];
//     if (s === '!') {
//       if (find(uf[a]) === find(uf[b])) return false;
//     }
//   }

//   return true;
// };

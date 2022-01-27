// TS
function maxDistToClosest(seats: number[]): number {
  const ldis: number[] = Array(seats.length).fill(Infinity);
  const rdis: number[] = Array(seats.length).fill(Infinity);
  const res: number[] = Array(seats.length).fill(0);

  let dis = Infinity;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      dis = 0;
      ldis[i] = 0;
    } else {
      ldis[i] = ++dis;
    }
  }

  dis = Infinity;
  for (let i = seats.length - 1; i >= 0; i--) {
    if (seats[i] === 1) {
      rdis[i] = 0;
      dis = 0;
    } else {
      rdis[i] = ++dis;
    }
  }

  for (let i = 0; i < seats.length; i++) {
    res[i] = Math.min(ldis[i], rdis[i]);
  }

  return Math.max(...res);
}

// JS
// var maxDistToClosest = function (seats) {
//     const ldis = Array(seats.length).fill(Infinity);
//     const rdis = Array(seats.length).fill(Infinity);
//     const res = Array(seats.length).fill(0);

//     let dis = Infinity;

//     for (let i = 0; i < seats.length; i++) {
//       if (seats[i] === 1) {
//         dis = 0;
//         ldis[i] = 0;
//       } else {
//         ldis[i] = ++dis;
//       }
//     }

//     dis = Infinity;
//     for (let i = seats.length - 1; i >= 0; i--) {
//       if (seats[i] === 1) {
//         rdis[i] = 0;
//         dis = 0;
//       } else {
//         rdis[i] = ++dis;
//       }
//     }

//     for (let i = 0; i < seats.length; i++) {
//       res[i] = Math.min(ldis[i], rdis[i]);
//     }

//     return Math.max(...res);
//   };

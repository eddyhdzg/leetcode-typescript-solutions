// Runtime: 76 ms, faster than 48.28% of JavaScript online submissions for Distribute Candies to People.
// Memory Usage: 36.6 MB, less than 34.48% of JavaScript online submissions for Distribute Candies to People.
function distributeCandies(candies: number, num_people: number): number[] {
  const res: number[] = new Array(num_people).fill(0);
  let i = 1;
  while (candies > 0) {
    res[(i - 1) % num_people] += Math.min(i, candies);
    candies -= i;
    i++;
  }
  return res;
}

// Generating an array with the distributions
// Runtime: 72 ms, faster than 68.10% of JavaScript online submissions for Distribute Candies to People.
// Memory Usage: 38.1 MB, less than 5.17% of JavaScript online submissions for Distribute Candies to People.

function distributeCandies(candies: number, num_people: number): number[] {
  const distributions: number[] = [];
  let x = 1;
  while (candies > 0) {
    if (candies >= x) {
      candies -= x;
      distributions.push(x);
    } else {
      distributions.push(candies);
      candies = 0;
    }
    x++;
  }

  const res = new Array(num_people).fill(0);

  for (let i = 0; i < num_people; i++) {
    for (let j = i; j < distributions.length; j += num_people) {
      res[i] += distributions[j];
    }
  }

  return res;
}

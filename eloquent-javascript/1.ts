const fizzBuzz = () => {
  let i = 1;

  while (i <= 15) {
    if (!(i % 3) && !(i % 5)) console.log('FIZZBUZZ');
    else if (!(i % 3)) console.log('FIZZ');
    else if (!(i % 5)) console.log('BUZZ');
    else console.log(i);
    i++;
  }
};

const chessboard = (size: number = 8) => {
  let a = '';
  let b = '';
  const board: string[] = [];

  for (let i = 0; i < size; i++) {
    if (i % 2) {
      a += '#';
      b += ' ';
    } else {
      a += ' ';
      b += '#';
    }
  }

  for (let i = 0; i < size; i++) {
    if (i % 2) board.push(b);
    else board.push(a);
  }
};

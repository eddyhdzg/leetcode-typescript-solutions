const range = (start: number, end: number, step: number = 1) => {
  return Array.from(
    { length: (1 + Math.abs(end - start)) / Math.abs(step) },
    (_, i) => start + i * step
  );
};

const sum = (nums: number[]) => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};

interface IAList {
  value: number;
  rest: IAList | null;
}

const exampleList: IAList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const listToArray = (list: IAList | null) => {
  const arr: number[] = [];

  while (list) {
    arr.push(list.value);
    list = list.rest;
  }

  return arr;
};

const arrayToList = (array: number[]) => {
  let head: IAList = {
    value: -1,
    rest: null,
  };

  const dummy: IAList | null = head;

  array.forEach((num) => {
    const aux = {
      value: num,
      rest: null,
    };

    head.rest = aux;
    head = head.rest;
  });

  return dummy.rest;
};

const prepend = (num: number, list: IAList | null) => {
  const head: IAList = {
    value: num,
    rest: list,
  };

  return head;
};

const nth = (position: number, list: IAList | null) => {
  let i = 0;

  while (i < position && list) {
    list = list.rest;
    i++;
  }

  return list?.value || undefined;
};

const isObject = (object) => {
  return object != null && typeof object === 'object';
};

const deepComparison = (v1, v2) => {
  if (v1 === v2) return true;
  if (!isObject(v1) || !isObject(v2)) return false;

  const v1keys = Object.keys(v1);
  const v2keys = Object.keys(v2);

  if (v1keys.length !== v2keys.length) return false;

  for (const key of v1keys) {
    const val1 = v1[key];
    const val2 = v2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepComparison(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
};

const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};

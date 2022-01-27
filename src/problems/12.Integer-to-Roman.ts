const hash = [
    {
      roman: 'M',
      val: 1000,
    },
    {
      roman: 'CM',
      val: 900,
    },
    {
      roman: 'D',
      val: 500,
    },
    {
      roman: 'CD',
      val: 400,
    },
    {
      roman: 'C',
      val: 100,
    },
    {
      roman: 'XC',
      val: 90,
    },
    {
      roman: 'L',
      val: 50,
    },
    {
      roman: 'XL',
      val: 40,
    },
    {
      roman: 'X',
      val: 10,
    },
    {
      roman: 'IX',
      val: 9,
    },
    {
      roman: 'V',
      val: 5,
    },
    {
      roman: 'IV',
      val: 4,
    },
    {
      roman: 'I',
      val: 1,
    },
  ];

  // JS
  // Runtime: 148 ms, faster than 94.34% of JavaScript online submissions for Integer to Roman.
  // Memory Usage: 44.6 MB, less than 89.54% of JavaScript online submissions for Integer to Roman.
  var intToRoman = function (num) {
    let res = '';

    let i = 0;

    while (num > 0) {
      if (num >= hash[i].val) {
        res += hash[i].roman;
        num -= hash[i].val;
      } else i++;
    }

    return res;
  };

  // TS
  // Runtime: 156 ms, faster than 95.95% of TypeScript online submissions for Integer to Roman.
  // Memory Usage: 45.6 MB, less than 95.38% of TypeScript online submissions for Integer to Roman.
  function intToRoman(num: number): string {
    let res = '';

    let i = 0;

    while (num > 0) {
      if (num >= hash[i].val) {
        res += hash[i].roman;
        num -= hash[i].val;
      } else i++;
    }

    return res;
  }

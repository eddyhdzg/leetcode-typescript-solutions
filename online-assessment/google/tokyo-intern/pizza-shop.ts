const pizzaShop = (pizzas: number[], toppings: number[], x: number) => {
  const perms: number[] = [];
  const set = new Set<number>();

  pizzas.forEach((pizza) => {
    const newValues = generatePerms(pizza, toppings);
    newValues.forEach((newValue) => {
      set.add(newValue);
    });
  });

  const sortedPrices = [...set].sort((a, b) => a - b);
};

const generatePerms = (
  pizza: number,
  stockToppings: number[],
  addedToppings: number[] = [],
  perms: number[] = []
) => {
  if (addedToppings.length <= 2) {
    const pizzaPrice = addedToppings.reduce((acc, curr) => {
      return acc + curr;
    }, pizza);
    perms.push(pizzaPrice);

    for (let i = 0; i < stockToppings.length; i++) {
      const nextStockToppings = stockToppings.filter((_, index) => i !== index);
      generatePerms(
        pizza,
        nextStockToppings,
        [...addedToppings, stockToppings[i]],
        perms
      );
    }
  }

  return perms;
};

const getClosestNumber = (nums: number[], x: number) => {
  if (nums.length <= 1) {
    return x;
  }

  // If it is smaller than all
  if (nums[0] > x) return nums[0];

  let i = 0;

  while (i < nums.length - 1 && nums[i] < x) {
    i++;
  }

  // If is the same
  if (nums[i] === x) return x;

  if (Math.abs(nums[i] - x) < Math.abs(nums[i - 1] - x)) {
    return nums[i];
  }

  return nums[i - 1];
};

getClosestNumber([1200, 1300], 1100);

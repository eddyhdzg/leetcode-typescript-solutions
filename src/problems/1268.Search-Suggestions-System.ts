function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();
  const res: string[][] = new Array(searchWord.length).fill([]);

  for (let idx = 0; idx < searchWord.length; idx++) {
    const next: string[] = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i][idx] === searchWord[idx]) {
        next.push(products[i]);
        res[idx].length < 3 && res[idx].push(products[i]);
      }
    }
    products = next;
  }
  return res;
}

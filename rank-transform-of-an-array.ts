// copy sorted array and put value and new index into map
function arrayRankTransform(arr: number[]): number[] {
  const newone = new Map<number, number>();
  Array.from(new Set(arr))
    .sort((a, b) => a - b)
    .forEach((v, i) => {
      newone.set(v, i);
    });

  return arr.map((v) => {
    return newone.get(v)! + 1;
  });
}

console.log(arrayRankTransform([40, 10, 20, 30])); // Output: [4, 1, 2, 3]
console.log(arrayRankTransform([100, 100, 100])); // Output: [1, 1, 1]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // Output: [5, 3, 4, 2, 8, 6, 7, 1, 3]

function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i][i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum2 = sum2 + arr[arr.length - 1 - i][i];
  }
  let difference = sum1 - sum2;
  return Math.abs(difference);
}

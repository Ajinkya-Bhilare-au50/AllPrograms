function climbingLeaderboard(ranked, player) {
  // Write your code here
  let arr = [...new Set(ranked)];
  let result = [];
  let j = arr.length - 1;

  for (let num in player) {
    while (arr[j] <= player[num]) {
      j--;
    }
    result.push(j + 2);
  }
  return result;
}
t = climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
console.log(t);

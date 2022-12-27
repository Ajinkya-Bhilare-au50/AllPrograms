function MinMoves(X, Y) {
  var D = Math.abs(X - Y);
  Min = D;
  if (X <= Y) 
  Min = (Math.floor((D + 1)/2) + Math.floor(D % 2 == 1));
  return Min;
}
console.log(MinMoves(995, 359))
console.log(MinMoves(362, 118));
console.log(MinMoves(31, 947));
console.log(MinMoves(924, 639));
console.log(MinMoves(167, 720));
console.log(MinMoves(262, 904));
console.log(MinMoves(965, 797));
console.log(MinMoves(359, 87));
// MinMoves(995, 359);

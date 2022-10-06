b = [];
a = [4, 5, 62, 12, 45, 1, 7, 89, 89, 56, 563, 24, 60, 10];
for (i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    element = a[i];
    b.push(element);
  }
}
console.log(b);

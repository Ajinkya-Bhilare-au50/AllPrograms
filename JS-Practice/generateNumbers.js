const digits = [1, 2];
const limit = 10;

// maintaining queue only for printing
//TC: linear : O(n)
const Numbs = (digits = [], limit) => {
  let i = 0;
  let element;
  const q = [];
  q.push(digits[0]);
  q.push(digits[1]);
  while (i <= limit) {
    // console.log(i + "hallo");
    element = q.shift();
    // console.log(element + " Element variable");
    console.log(element + (digits[0] + ""));
    q.push(element + (digits[0] + ""));
    // console.log(q + "ARR1");
    console.log(element + (digits[1] + ""));
    q.push(element + (digits[1] + ""));
    // console.log(q + "ARRY2");
    i++;
  }
};

Numbs(digits, limit);

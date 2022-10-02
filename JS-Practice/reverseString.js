function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message + "\n" + s);
  }
}
reverseString("pandya");
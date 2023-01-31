
//Numbers which have exactly three divisors
//Ajinkya Monthly test-2 TRIME NUMBERS
function out(vivo) {
    
  for (i = 0; i < vivo.length; i++) {

      n = vivo[i];
    threeDivi(n);

    function threeDivi(n) {
      let divisors = 0;

      for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
          divisors++;
        }
      }

      if (divisors == 3) {
        console.log("Yes");
      } else {
        console.log("No");
      }
    }
  }
}
vivo = [ 4, 5, 6];
out(vivo);

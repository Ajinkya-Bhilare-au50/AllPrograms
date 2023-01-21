btn1 = document.getElementById("btn");
btn1.addEventListener("click", Calculate);
function Calculate() {
  let billamount = document.getElementById("billamount").value;
  let percentage = document.getElementById("percent").value;

  tip = 0;
  total = 0;
  tip = (Number(percentage) / 100) * Number(billamount);
  // console.log(billamount);
  total = Number(billamount) + Number(tip);
  document.getElementById("tip").value = tip;
  document.getElementById("total").value = total;
}
clear = document.getElementById("clear");
clear.addEventListener("click", clear1);
function clear1() {
    document.getElementById("billamount").value = "";
    document.getElementById("percent").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("total").value = "";
}

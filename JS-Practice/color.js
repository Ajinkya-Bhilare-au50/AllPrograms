document.getElementById("dabang").style.fontSize = "60px";
document.getElementById("dabang").style.color = "green";
document.getElementById("dabang").innerHTML = "I love AVATAR movie";
const p = document.getElementById("dabang");
// p.innerHTML = "i am DON "

const r = document.querySelectorAll(".tortoise");
for (let i = 0; i < r.length; i++) {
  r[i].style.color = "green";
}

const v = document.querySelectorAll(".heading");
for (let i = 0; i < v.length; i++) {
  v[i].style.color = "pink";
}
const t = document.querySelectorAll(".description");
for (let i = 0; i < t.length; i++) {
  t[i].style.color = "blue";
  t[i].style.fontSize = "40px";
  t[i].style.fontFamily = "sans-serif";
}
const btn = document.getElementById("dada");
btn.addEventListener("click", changecolor);

function changecolor() {
  p.style.backgroundColor = "red";
  const t = document.querySelectorAll(".description");
  for (let i = 0; i < t.length; i++) {
    t[i].style.backgroundColor = "yellow";
    t[i].style.fontSize = "40px";
    t[i].style.fontFamily = "sans-serif";
  }
}
try {
    // write that code which you want to execute
} catch (error) {
    //if the code in try block fails to run due some reason . we handle the error here
}

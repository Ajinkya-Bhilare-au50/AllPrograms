//Callback functions in javascript
function t1() {
    console.log("Good Morning ");
}

function t2(t1,t3,t4,t5) {
    console.log("Good Afternoon ");
    t1();
    t3();
    t4();
    t5();

}

function t3() {
  console.log("Good Evening ");
}

function t4() {
  console.log("Good Night ");
}

function t5() {
  console.log("I am Sleeping ");
}
t2(t1, t3, t4, t5);




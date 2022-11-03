/* console.log("1");

setTimeout(function () {
  console.log("2");
},5000 );//5 seconds delay
console.log("3");
 */
/* console.log("1");

setTimeout(() => {
  console.log("2");
}, 2000); //5 seconds delay
console.log("3");
 */

//Callback Functions without parameters

/* function GoodMorning() {
  console.log("Good Morning");
  setTimeout(GoodAfternoon, 2000);
}

function GoodAfternoon() {
  console.log("Good Afternoon");
  setTimeout(GoodEvening, 2000);
}
function GoodEvening() {
  console.log("Good Evening");
  setTimeout(GoodNight, 2000);
}

function GoodNight() {
  console.log("Good Night");
}

setTimeout(GoodMorning, 2000);
 */

//Callback Functions with passing parameters

// t1(3);
// t2(4);
// t3(5);
setTimeout(function t1(a = 3) {
  console.log(a);
  setTimeout(function t2(b = 4) {
    console.log(b);
    setTimeout(function t3(c = 6) {
      console.log(c);
    }, 2000);
  }, 2000);
}, 2000);

/* 
function outcome() {
  return true;
}

function process(callbackSuccess, callbackFailure) {
  if (outcome()) callbackSuccess();
  else callbackFailure();
}

process(
  function () {
    console.log("OKAY Callback Success");
  },
  function () {
    console.log("OOPS Callback Failure");
  }
);
 */

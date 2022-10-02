//any function that is passed as argument is called as a callbackfunction.
/* Function is first class citizen 
in javascript we can pass a function as an argument 
returning functions

function within a function
but it is only executed when first function has completed its execution

*/
//f1 using arrow
const GirlFriend = (friend,callbestie) => {
  console.log(
    "i am busy right now. I am talking to " + friend + " I will call you back soon "
  );
  callbestie();
};
//f2 using arrow
const BestFriend = () => {
  console.log("hey what Whatsup Bestie, see i called you back ");
};

GirlFriend("Kriti Sanon",BestFriend);
; //calling

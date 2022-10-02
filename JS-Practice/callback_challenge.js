/* 
function chat() {
  console.log("i am chatting");
}

//callback function;
function whatsapp(chat) {
  console.log("i am Installing Whatsapp");
  chat();
  
}
whatsapp(chat);
 */

// example-2

home = () => {
  console.log("i am returning home");
};
travel = (D, p, h) => {
  console.log("i am traveling");
  D();
  p();
  h();
};

photograph = () => {
  console.log("i am clicking photos");
};

Destination = () => {
  console.log("reached at destination");
};

travel(Destination, photograph, home); //callbacks for





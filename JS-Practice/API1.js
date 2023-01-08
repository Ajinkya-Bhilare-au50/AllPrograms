fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://catfact.ninja/fact").then((res) => {
  if (res.ok) console.log("success");
  else {
    console.log("Not Successful");
  }
});

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => console.log(data));
fetch("https://www.boredapi.com/api/activity")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos/10")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
/* 
https://apipheny.io/free-api/#entertainment-apis


Agify.io
Predict the age of a person based on their name.
https://api.agify.io?name=meelad


Genderize.io
https://api.genderize.io?name=luc
  
Nationalize.io

https://api.nationalize.io?name=nathaniel
  
Jokes

https://official-joke-api.appspot.com/random_joke

RandomUser
https://randomuser.me/api/



Universities List
http://universities.hipolabs.com/search?country=United+States




  */

const url = "https://icanhazdadjoke.com/";
console.log("fetch completed");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
// console.log(btn, result);
btn.addEventListener("click", () => {
  // console.log("hello")
  fetchDadJoke();
});
const fetchDadJoke = async () => {
  result.textContent = "...."; //before fetching the url we use loading
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Learning app",
      },
    });
    //   console.log(response);
      //OK=True when fetch is successful
      //OK=false when fetch is unsuccessful
    const data = await response.json();
    // console.log(data.joke);
    result.innerHTML = data.joke;
  } catch (error) {
       result.innerHTML ="There was an error .Please retry"
      
  }

  //   document.querySelector(".result").innerHTML = data.joke;
};
fetchDadJoke();

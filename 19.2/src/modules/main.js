import { Data } from "./data.js";

const data = new Data();
const url = "https://jsonplaceholder.typicode.com/todos/1";

data.getUsefulContents(url, function(data) {
  return console.log(data);
});

document.querySelector(".request").addEventListener("click", getIt);

function getIt() {
  const responseResult = document.querySelector("#response");
  responseResult.innerHTML =
    "Take a look at the console logs to get a server response.";
}

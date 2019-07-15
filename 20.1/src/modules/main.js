import { Data } from "./data.js";

const data = new Data();
const url = "https://jsonplaceholder.typicode.com/todos/1";

function getIt() {
  data.getUsefulContents(url).then(data => console.log(data));
}

document.querySelector(".request").addEventListener("click", getIt);

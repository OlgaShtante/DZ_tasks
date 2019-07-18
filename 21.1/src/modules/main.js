import { addEventListener } from "./buttonClick.js";
import { runSetTimeOut } from "./setTimeout.js";
import { makeSyncDelay } from "./syncDelay.js";
import runXhr from "./xmlHttpRequest.js";

makeSyncDelay("Sync delay", 4);

runSetTimeOut("Timer", 80);

const url1 = "https://jsonplaceholder.typicode.com/photos/1";
const url2 = "https://jsonplaceholder.typicode.com/photos/2";
const url3 = "https://jsonplaceholder.typicode.com/photos/3";

runXhr("1st request", url1);
runXhr("2nd request", url2);
runXhr("3rd request", url3);

addEventListener("onButtonClick");

console.log("Sync code starts");

import { ClassUpdate } from "./classUpdate.js";

const htmlElements = {
  output: document.querySelector('.container [data-mode="timer"] .output'),
  buttons: document.querySelectorAll(
    '.container .tabs [data-mode="timer"] .buttons button'
  ),
  startButton: document.querySelector(
    '.container .tabs [data-mode="timer"] .buttons .start'
  ),
  stopButton: document.querySelector(
    '.container .tabs [data-mode="timer"] .buttons .stop'
  ),
  resetButton: document.querySelector(
    '.container .tabs [data-mode="timer"] .buttons .reset'
  )
};

function Timer() {}

Timer.prototype.init = function() {
  htmlElements.startButton.addEventListener("click", onStartButtonClick);
  htmlElements.stopButton.addEventListener("click", onStopButtonClick);
  htmlElements.resetButton.addEventListener("click", onResetButtonClick);
};

let startTime;
let myInterval;
let totalDifferenceSeconds = 302;
let differenceSeconds = 0;

function onStartButtonClick() {
  ClassUpdate.removeClass("disabled", htmlElements.buttons);
  ClassUpdate.addClass("disabled", [htmlElements.startButton]);
  myInterval = setInterval(onIntervalTick, 1000);
  startTime = new Date().getTime();
}

function onStopButtonClick() {
  ClassUpdate.removeClass("disabled", htmlElements.buttons);
  ClassUpdate.addClass("disabled", [htmlElements.stopButton]);
  clearInterval(myInterval);
  totalDifferenceSeconds = differenceSeconds;
}

function onResetButtonClick() {
  ClassUpdate.removeClass("disabled", htmlElements.buttons);
  ClassUpdate.addClass("disabled", [htmlElements.resetButton]);
  totalDifferenceSeconds = 302;
  startTime = new Date().getTime();
  clearInterval(myInterval);
  htmlElements.output.innerText = "00:05:00";
}

function onIntervalTick() {
  const differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds = totalDifferenceSeconds - differenceMilliseconds / 1000;
  let seconds = parseInt(differenceSeconds % 60);
  let minutes = parseInt((differenceSeconds / 60) % 60);
  let hours = parseInt((differenceSeconds / 3600) % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;

  if (htmlElements.output.innerText === "00:00:00") {
    timeIsOver();
  }
}

function timeIsOver() {
  clearInterval(myInterval);
  alert("Your time is OVER!");
  htmlElements.output.innerText = "00:05:00";
}

export { Timer };

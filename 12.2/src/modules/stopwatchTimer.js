import { ClassUpdate } from "./classUpdate.js";

function StopwatchTimer(initMode, startTimeInSeconds) {
  let startTime;
  let myInterval;
  let differenceSeconds = 0;
  let lastDifferenceSeconds = startTimeInSeconds;
  let mode = initMode;

  const htmlElements = {
    output: document.querySelector('.container [data-mode="${mode}"] .output'),

    buttons: document.querySelectorAll(
      '.container .tabs [data-mode="${mode}"] .buttons button'
    ),
    startButton: document.querySelector(
      '.container .tabs [data-mode="${mode}"] .buttons .start'
    ),
    stopButton: document.querySelector(
      '.container .tabs [data-mode="${mode}"] .buttons .stop'
    ),
    resetButton: document.querySelector(
      '.container .tabs [data-mode="${mode}"] .buttons .reset'
    )
  };

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
    lastDifferenceSeconds = startTimeInSeconds;
  }

  function onResetButtonClick() {
    ClassUpdate.removeClass("disabled", htmlElements.buttons);
    ClassUpdate.addClass("disabled", [htmlElements.resetButton]);
    lastDifferenceSeconds = startTimeInSeconds;
    startTime = new Date().getTime();
    clearInterval(myInterval);
    onIntervalTick();
  }

  function onIntervalTick() {
    const differenceMilliseconds = new Date().getTime() - startTime;
    switch (mode) {
      case "stopwatch":
        differenceSeconds =
          lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);
        break;
      case "timer":
        differenceSeconds =
          lastDifferenceSeconds - Math.round(differenceMilliseconds / 1000);
        if (differenceSeconds === 0) {
          timeIsOver();
        }
        break;
    }

    let seconds = parseInt(differenceSeconds % 60);
    let minutes = parseInt((differenceSeconds / 60) % 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    htmlElements.output.innerText = `00:${minutes}:${seconds}`;
  }

  function timeIsOver() {
    clearInterval(myInterval);
    setTimeout(alertTimeIsOver, 1000);
    setTimeout(setTimerToStartPosition, 1000);
  }

  function alertTimeIsOver() {
    alert("Your time is OVER!");
  }

  function setTimerToStartPosition() {
    htmlElements.output.innerText = "00:05:00";
  }

  htmlElements.startButton.addEventListener("click", onStartButtonClick);
  htmlElements.stopButton.addEventListener("click", onStopButtonClick);
  htmlElements.resetButton.addEventListener("click", onResetButtonClick);
}

export { StopwatchTimer };
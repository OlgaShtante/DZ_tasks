import { ClassUpdate } from "./classUpdate.js";

function StopwatchTimer(initMode, initSeconds) {
  let mode = initMode;
  let startTime, timerId;
  let lastDifferenceSeconds = initSeconds;
  let differenceSeconds = 0;
  let differenceMilliSeconds = 0;

  this.htmlElements = {
    output: document.querySelector(`.container  [data-mode=${mode}] .output`),
    buttons: document.querySelectorAll(
      `.container [data-mode=${mode}]  button`
    ),
    startButton: document.querySelector(
      `.container  [data-mode=${mode}] .start`
    ),
    stopButton: document.querySelector(`.container  [data-mode=${mode}] .stop`),
    resetButton: document.querySelector(
      `.container  [data-mode=${mode}] .reset`
    )
  };

  const {
    startButton,
    stopButton,
    resetButton,
    buttons,
    output
  } = this.htmlElements;

  function onStartButtonClicked() {
    ClassUpdate.removeClass("disabled", buttons);
    ClassUpdate.addClass("disabled", [startButton]);
    timerId = setTimeout(onIntervalTick, 1000);
    startTime = new Date().getTime();
  }

  function onStopButtonClicked() {
    ClassUpdate.removeClass("disabled", buttons);
    ClassUpdate.addClass("disabled", [stopButton]);
    stopTheStopwatchTimer();
  }

  function stopTheStopwatchTimer() {
    clearTimeout(timerId);
    if (differenceSeconds <= 0 && mode === "timer") {
      lastDifferenceSeconds = initSeconds;
      startTime = new Date().getTime();
      clearTimeout(timerId);
      onIntervalTick();
    }
    lastDifferenceSeconds = differenceSeconds;
  }

  function onResetButtonClicked() {
    ClassUpdate.removeClass("disabled", buttons);
    ClassUpdate.addClass("disabled", [resetButton]);
    clearTimeout(timerId);
    lastDifferenceSeconds = initSeconds;
    startTime = new Date().getTime();
    onIntervalTick();
    stopTheStopwatchTimer();
  }

  const thisContext = this;
  function onIntervalTick() {
    differenceMilliSeconds = thisContext.getTimeDifference(
      startTime,
      lastDifferenceSeconds
    );
    differenceSeconds =
      Math.round(differenceMilliSeconds / 1000) + lastDifferenceSeconds;

    let seconds = parseInt(differenceSeconds % 60);
    let minutes = parseInt((differenceSeconds / 60) % 60);
    let hours = parseInt(differenceSeconds / 3600);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    output.innerText = `${hours}:${minutes}:${seconds}`;
    if (output.innerText === "00:00:00" && mode === "timer") {
      timeIsOver();
    }

    function timeIsOver() {
      activateResetButton();
      setTimeout(alertTimeIsOver, 1000);
    }

    function activateResetButton() {
      ClassUpdate.addClass("disabled", buttons);
      ClassUpdate.removeClass("disabled", [resetButton]);
    }

    function alertTimeIsOver() {
      alert(
        "Your time is OVER! Сlick 'RESET' button if you want to start this timer again!"
      );
    }
    console.log("StopwatchTimer is ticking");
    timerId = setTimeout(onIntervalTick, 1000);
  }

  startButton.addEventListener("click", () => {
    onStartButtonClicked();
  });
  stopButton.addEventListener("click", () => {
    onStopButtonClicked();
  });
  resetButton.addEventListener("click", () => {
    onResetButtonClicked();
  });
}

export { StopwatchTimer };

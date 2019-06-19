import { ClassUpdate } from "./classUpdate.js";

function StopwatchTimer(initMode, initSeconds) {
  let startTime;
  let myInterval;
  let differenceSeconds = 0;
  let lastDifferenceSeconds = initSeconds;
  let mode = initMode;

  this.htmlElements = {
    output: document.querySelector(`.container [data-mode="${mode}"] .output`),

    buttons: document.querySelectorAll(
      `.container .tabs [data-mode="${mode}"] .buttons button`
    ),
    startButton: document.querySelector(
      `.container .tabs [data-mode="${mode}"] .buttons .start`
    ),
    stopButton: document.querySelector(
      `.container .tabs [data-mode="${mode}"] .buttons .stop`
    ),
    resetButton: document.querySelector(
      `.container .tabs [data-mode="${mode}"] .buttons .reset`
    )
  };

  const {
    output,
    buttons,
    startButton,
    stopButton,
    resetButton
  } = this.htmlElements;

  function onStartButtonClick() {
    ClassUpdate.removeClass("disabled", buttons);
    ClassUpdate.addClass("disabled", [startButton]);
    clearInterval(myInterval);
    myInterval = setInterval(onIntervalTick, 1000);
    startTime = new Date().getTime();
  }

  function onStopButtonClick() {
    ClassUpdate.removeClass("disabled", buttons);
    ClassUpdate.addClass("disabled", [stopButton]);
    clearInterval(myInterval);
    if (differenceSeconds <= 0 && mode === "timer") {
      resetTime();
    }
    lastDifferenceSeconds = differenceSeconds;
  }

  function onResetButtonClick() {
    ClassUpdate.removeClass("disabled", buttons);
    ClassUpdate.addClass("disabled", [resetButton]);
    resetTime();
  }

  function resetTime() {
    lastDifferenceSeconds = initSeconds;
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

    output.innerText = `00:${minutes}:${seconds}`;
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
    resetTime();
    ClassUpdate.removeClass("disabled", buttons);
  }

  startButton.addEventListener("click", () => {
    onStartButtonClick(mode);
  });
  stopButton.addEventListener("click", () => {
    onStopButtonClick(mode);
  });
  resetButton.addEventListener("click", () => {
    onResetButtonClick(mode);
  });
}

export { StopwatchTimer };

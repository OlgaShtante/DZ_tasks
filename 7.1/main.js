setInterval(timeOnSwitch, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector(
  ".container .buttons button.start"
);
htmlElements.stopBtn = document.querySelector(
  ".container .buttons button.start"
);
htmlElements.resetBtn = document.querySelector(
  ".container .buttons button.start"
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");

htmlElements.clock.addEventListener("click", function() {
  switchBetweenMode(this.dataset.mode);
});
htmlElements.stopwatch.addEventListener("click", function() {
  switchBetweenMode(this.dataset.mode);
});
htmlElements.timer.addEventListener("click", function() {
  switchBetweenMode(this.dataset.mode);
});

function timeOnSwitch() {
  const currentTime = new Date();
  const timeWholeValue = currentTime.toTimeString();
  const timeCutOffValue = timeWholeValue.split(" ")[0];
  displayTime(timeCutOffValue);
}

function displayTime(value) {
  htmlElements.output.innerText = value;
}

function switchBetweenMode(mode) {
  switch (mode) {
    case "clock":
      setSelected(htmlElements.clock);
      break;
    case "stopwatch":
      setSelected(htmlElements.stopwatch);
      break;
    case "timer":
      setSelected(htmlElements.timer);
      break;
  }
}

function setSelected(element) {
  removeSelection(htmlElements.clock);
  removeSelection(htmlElements.stopwatch);
  removeSelection(htmlElements.timer);
  element.classList.add("selected");
}

function removeSelection(element) {
  element.classList.remove("selected");
}

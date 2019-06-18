const htmlElements = {};
// debugger;
htmlElements.output = document.querySelector(
  '.container [data-mode="clock"] .output'
);

function Clock() {}

Clock.prototype.init = function() {
  setInterval(timeIsChangeOnTick, 1000);
  timeIsChangeOnTick();
  tabIsActivebyDefault();
};

function timeIsChangeOnTick() {
  const currentTime = new Date();
  const timeWholeValue = currentTime.toTimeString();
  const timeCutOffValue = timeWholeValue.split(" ")[0];
  htmlElements.output.innerText = timeCutOffValue;
}

function tabIsActivebyDefault() {
  document
    .querySelector('.container .links [data-mode="clock"] a')
    .classList.add("selected");
  document
    .querySelector('.container .tabs [data-mode="clock"] div')
    .classList.remove("hidden");
}

export { Clock };

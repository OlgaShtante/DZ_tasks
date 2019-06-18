const htmlElements = {};
htmlElements.output = document.querySelector(
  '.container [data-mode="clock"] .output'
);

function Clock() {}

Clock.prototype.init = function() {
  setInterval(timeIsChangeOnTick, 1000);
  timeIsChangeOnTick();
};

function timeIsChangeOnTick() {
  const currentTime = new Date();
  const timeWholeValue = currentTime.toTimeString();
  const timeCutOffValue = timeWholeValue.split(" ")[0];
  htmlElements.output.innerText = timeCutOffValue;
}

export { Clock };

const htmlElements = {};
htmlElements.output = document.querySelector(
  '.container [data-mode="clock"] .output'
);

class Clock {
  constructor() {
    setInterval(this.timeIsChangeOnTick, 1000);
    this.timeIsChangeOnTick();
  }
  timeIsChangeOnTick() {
    const currentTime = new Date();
    const timeWholeValue = currentTime.toTimeString();
    const timeCutOffValue = timeWholeValue.split(" ")[0];
    htmlElements.output.innerText = timeCutOffValue;
  }
}

export { Clock };

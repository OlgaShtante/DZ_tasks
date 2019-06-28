import { StopwatchTimer } from "./stopwatchTimer.js";
function Timer() {
  const timer = StopwatchTimer.bind(this);
  timer("timer", 300);
}

Timer.prototype = Object.create(StopwatchTimer.prototype);
Timer.prototype.constructor = Timer;
Timer.prototype.showInfo = function() {
  console.log(this);
};

Timer.prototype.getTimeDifference = function(
  startTime,
  lastDifferenceSeconds,
  myInterval
) {
  if (
    Math.round((startTime - new Date().getTime()) / 1000) +
      lastDifferenceSeconds <=
    0
  ) {
    clearInterval(myInterval);
    return 0 - lastDifferenceSeconds * 1000;
  } else {
    return startTime - new Date().getTime();
  }
};

export { Timer };

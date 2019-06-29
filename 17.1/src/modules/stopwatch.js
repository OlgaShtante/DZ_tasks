import { StopwatchTimer } from "./stopwatchTimer.js";

function Stopwatch() {
  StopwatchTimer.apply(this, ["stopwatch", 0]);
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);
Stopwatch.prototype.constructor = Stopwatch;
Stopwatch.prototype.showInfo = function() {
  console.log(this);
};

Stopwatch.prototype.getTimeDifference = function(startTime) {
  return new Date().getTime() - startTime;
};

export { Stopwatch };

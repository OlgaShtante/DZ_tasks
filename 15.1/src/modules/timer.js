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
export { Timer };

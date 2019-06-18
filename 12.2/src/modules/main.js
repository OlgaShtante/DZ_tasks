import { Clock } from "./clock.js";
import { Tabs } from "./tabs.js";
import { StopwatchTimer } from "./stopwatchTimer.js";

const clock = new Clock();
const tabs = new Tabs();
const stopwatch = new StopwatchTimer("stopwatch", 0);
const timer = new StopwatchTimer("timer", 300);

function init() {
  clock.init();
  tabs.init("clock");
}

init();

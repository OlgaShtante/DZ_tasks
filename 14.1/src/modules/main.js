import { Clock } from "./clock.js";
import { Tabs } from "./tabs.js";
import { Stopwatch } from "./stopwatch.js";
import { Timer } from "./timer.js";

const stopwatch = new Stopwatch();
const timer = new Timer();

new Clock();
new Tabs("clock");

stopwatch.showInfo();
timer.showInfo();

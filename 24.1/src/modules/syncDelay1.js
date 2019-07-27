import { Logger } from "./logger.js";

function SyncDelay1(name) {
  this.name = name;
}

SyncDelay1.prototype.run = function() {
  if (SyncDelay1.seconds === undefined) {
    throw new Error("SyncDelay1.seconds is not defined");
  }

  var seconds = SyncDelay1.seconds;
  var before = new Date().getTime();

  for (var j = 0; j < seconds; j++) {
    for (var i = 0; i < 800000000; i++) {}
  }

  var after = new Date().getTime();
  return new Logger(this.name, before, after, "completed successfully");
};

export default SyncDelay1;

import log from "./logger.js";

function makeSyncDelay(name, seconds) {
  const before = Date.now();

  for (let i = 0; i < seconds; i++) {
    for (let j = 0; j < 800000000; j++) {}
  }

  const after = Date.now();
  log(name, before, after, `set delay is ${seconds} sec;`);
}

export { makeSyncDelay };

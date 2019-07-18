import log from "./logger.js";

function runSetTimeOut(name, milliseconds) {
  const before = Date.now();

  setTimeout(() => {
    const after = Date.now();
    log(name, before, after, `supposed time: ${milliseconds} ms;`);
  }, milliseconds);
}

export { runSetTimeOut };

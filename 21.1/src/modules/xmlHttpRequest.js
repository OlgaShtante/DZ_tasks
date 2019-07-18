import log from "./logger.js";

function runXhr(name, url) {
  const before = Date.now();

  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.onload = function() {
    const after = Date.now();

    log(name, before, after);
  };

  request.send();
}

export default runXhr;

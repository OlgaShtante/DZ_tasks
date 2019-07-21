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
//Замыкание на before и after:
//функция log имеет доступ к входным параметрам before, after
//которые инициализированы во внешнем лексическом окружении.

export default runXhr;

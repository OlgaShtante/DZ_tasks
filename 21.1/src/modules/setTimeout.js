import log from "./logger.js";

function runSetTimeOut(name, milliseconds) {
  const before = Date.now();

  setTimeout(() => {
    const after = Date.now();
    log(name, before, after, `supposed time: ${milliseconds} ms;`);
  }, milliseconds);
}
//Замыкание на before и after:
//функция log имеет доступ к входным параметрам before, after
//которые инициализированы во внешнем лексическом окружении.

export { runSetTimeOut };

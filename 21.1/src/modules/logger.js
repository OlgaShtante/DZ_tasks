function log(name, before, after, comment = "") {
  const beginTime = before.toString().substring(8, 13);
  const endTime = after.toString().substring(8, 13);
  //константе beginTime присвоена ссылка на свойство объекта before,
  //который инициализирован во внешнем лексическом окружении.

  //константе endTime присвоена ссылка на свойство объекта after,
  //который инициализирован во внешнем лексическом окружении.

  console.log(
    `${name}: 
    start time: ${beginTime};
    finish time: ${endTime}; 
    difference: ${after - before} ms; 
    ${comment}`
  );
}
//функция console на объекте log имеет доступ к входящим параметрам before, after,
//которые инициализированы во внешнем лексическом окружении.

export default log;

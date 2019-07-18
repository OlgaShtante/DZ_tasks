function log(name, before, after, comment = "") {
  const beginTime = before.toString().substring(8, 13);
  const endTime = after.toString().substring(8, 13);

  console.log(
    `${name}: 
    start time: ${beginTime};
    finish time: ${endTime}; 
    difference: ${after - before} ms; 
    ${comment}`
  );
}

export default log;

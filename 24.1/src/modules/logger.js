function Logger(name, before, after, comments = "") {
  this.name = name;
  this.before = before;
  this.after = after;
  this.comments = comments;
}

Logger.prototype.logInfo = function() {
  const beginTime = this.before.toString().substring(8, 13);
  const endTime = this.after.toString().substring(8, 13);

  console.log(
    `${this.name}:  
    start time: ${beginTime};
    finish time: ${endTime}; 
    difference: ${this.after - this.before}; 
    ${this.comments}`
  );
};

export { Logger };

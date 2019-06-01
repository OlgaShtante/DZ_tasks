function Students(boys, girls){
  this.boys = boys;
  this.girls = girls;
}

  Students.prototype.study = function(){
    const studyProcess = "Students are studying!"
      console.log(studyProcess);
      return studyProcess;
  }

export { Students };


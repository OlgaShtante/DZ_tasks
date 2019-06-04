const studentParam = "smart";

function Students(boys, girls){
  this.boys = boys;
  this.girls = girls;
  this.group = 'M-FD2-54-19';
  this.boys = studentParam;

  const askQuestion = function(studentParam){
    alert(`students ${studentParam} ask questions`);
  } 
  askQuestion('often');

  this.doHomework = function(){
    this.group = `evening group`;
    console.log(`${this.group} starts clases at 18:30 on Wednesday`)
  }
}

  Students.prototype.study = function(){
    this.boys = 10;
    this.girls = 3; 
    const stydyProcess = `students are studying!`
    this.group = parseInt(this.boys)+parseInt(this.girls);
    console.log(`${this.group} ${studyProcess}`);
  }

export { Students };


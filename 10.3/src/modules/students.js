const classTime = ["15:30", "18:30"]; //область видимости ограничена модулем students.js
const classDay = ["Wednesday", "Saturday"]; //область видимости ограничена модулем students.js

function Students(boys, girls) {
  this.boys = boys;
  this.girls = girls;
  this.group = "M-FD2-54-19";
  this.mostOfGroup = boys;

  const askQuestion = function(studentParam) {
    //область видимости ограничена функцией-конструктором Students(){}

    alert(`students ${studentParam} ask questions`);
  };
  askQuestion("often");

  this.doHomework = function() {
    this.group = "evening group";
    console.log(
      `${this.group} starts classes at ${classTime[1]} on ${classDay[0]}`
    );
  };
}

const studySubject = "javaScript"; //область видимости ограничена модулем students.js

Students.prototype.study = function() {
  this.boys = 10;
  this.girls = 3;
  const studyProcess = "students are studying!"; //область видимости ограничена методом study(){}
  this.group = this.boys + this.girls;
  console.log(`${this.group} ${studyProcess} ${studySubject}`);
};

export { Students };

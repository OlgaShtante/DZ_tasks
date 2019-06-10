function Teacher(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.name = firstName;
  this.experience = "about 10 years in development";

  const askQuestion = function(teachParam) {
    //область видимости ограничена функцией-конструктором Teacher(){}

    alert(`${teachParam} asks "what is a method?"`);
  };
  askQuestion("Yury");

  const testStudents = function(testParam) {
    //область видимости ограничена функцией-конструктором Teacher(){}

    for (
      let lessons = testParam; //область видимости ограничена циклом for()
      lessons < 10;
      lessons++
    )
      console.log(`Пора проводить тест, прошло ${lessons} занятий`);
  };
  testStudents(8);

  this.introduce = function() {
    this.firstName = "Юра";
    alert(`Меня зовут ${this.firstName} ${this.lastName}, я преподаю JS.`);
  };
}

Teacher.prototype.teach = function() {
  this.firstName = "Yurij";
  const teachProgramLang = "JS"; //область видимости ограничена методом teach(){}
  console.log(`${this.firstName} ${this.lastName} teaches ${teachProgramLang}`);
};

export { Teacher };

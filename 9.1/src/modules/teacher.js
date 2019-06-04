const teachParam = "Yura";

function Teacher(firstName, lastName, age) {
  this.firstName= firstName;
  this.lastName = lastName;
  this.age = age;
  this.firstName = teachParam;
  this.experience = "about 10 years in development";

  
const askQuestion = function(teachParam){
  alert(`${teachParam} asks "what is a method?"`);
} 
askQuestion('Yury');

  this.introduce = function() {
  this.firstName =`Юра`;
    alert( `Меня зовут ${this.firstName} ${this.lastName}, я преподаю JS.` );
  }
}

Teacher.prototype.teach = function(){
  this.firstName =`Yurij`;
  console.log(`${this.firstName} ${this.lastName} teaches JS`)
}


export{ Teacher };
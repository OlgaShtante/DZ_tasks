function Teacher(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Teacher.prototype.teaches = function(){
    const teacherTeaches = `${this.firstName} ${this.lastName} teaches JS`;
    console.log(teacherTeaches);
    return teacherTeaches;
}

export{ Teacher };
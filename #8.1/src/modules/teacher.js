function Teacher(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Teacher.prototype.teaches = function(){
    const teacherTeaches = `${teacher.firstName}${teacher.lastName} teaches JS`;
    console.log(teacherTeaches);
    return teacherTeaches;
}

export{ Teacher };
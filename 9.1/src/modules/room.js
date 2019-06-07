function Room(realTeacher, groupOfStudents, roomFurniture, roomTechEquipment, roomConstructionElements, roomDecorElements)
{
  this.realTeacher = realTeacher;
  this.groupOfStudents = groupOfStudents;
  this.roomFurniture = roomFurniture;
  this.roomTechEquipment = roomTechEquipment;
  this.roomConstructionElements = roomConstructionElements;
  this.roomDecorElements = roomDecorElements;
  this.roomPurpose = "studying";
  this.rusTeacher = realTeacher;


const studyInTheRoom = function(roomParam){
  alert(`Room is used for ${roomParam}`);
} 
studyInTheRoom('studying');
            
  this.gatherStudents = function(){
  this.teacher = "Teacher";
  console.log(`${this.teacher} gathers people around him!`);
  }
}

Room.prototype.orginizeClasses = function(){
  this.groupOfStudents ="Students";
  console.log(`${this.groupOfStudents} learn JS in the room 57.`);
}

export { Room };
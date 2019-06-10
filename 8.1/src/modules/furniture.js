function Furniture(
  computerDesks,
  teacherDesk,
  chairs,
  studyDesks,
  rollingChairs
) {
  this.computerDesks = computerDesks;
  this.teacherDesk = teacherDesk;
  this.chairs = chairs;
  this.studyDesks = studyDesks;
  this.rollingChairs = rollingChairs;
}

Furniture.prototype.arrange = function() {
  const arrangeFurniture = `should be at the right place!`;
  const arrangeInTheRoom = `The furniture ${arrangeFurniture}`;
  console.log(arrangeInTheRoom);
  return arrangeInTheRoom;
};

export { Furniture };

const furnitureParam = "useful";

function Furniture(computerDesks, teacherDesk, chairs, studyDesks, rollingChairs)
{
    this.computerDesks = computerDesks;
    this.teacherDesk = teacherDesk;
    this.chairs = chairs;
    this.studyDesks = studyDesks;
    this.rollingChairs = rollingChairs;
    this.computerDesks = 'small';
    this.allChairs = 'standard';
    this.chairs = furnitureParam;

    const useFurniture = function(furnitureParam){
    alert(`students and teascher use ${furnitureParam} furniture`);
    } 
    useFurniture('comfortable');
        
    this.breakFurniture = function(){
    this.rollingChairs = `often broken`;
    console.log(`Rolling chairs are ${this.rollingChairs}`);
}
}

Furniture.prototype.arrange = function(){
  const arrangeFurniture = `should be at the right place!`;
  this.chairs = `furniture`;
  console.log(`This ${this.chairs} ${arrangeFurniture}`);
  }

export { Furniture };

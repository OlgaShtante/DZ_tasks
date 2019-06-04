const construstEquipParam = "closed";

function ConstructionEquipment(door, window){
    this.door = door;
    this.window = window;
    this.wall = 4;
    this.door = construstEquipParam;

    const lockTheDoor = function(construstEquipParam){
          alert(`The door is ${construstEquipParam} before the class`);
        } 
    lockTheDoor('locked');
        
    this.open = function() {
    this.window =`opened`;
    console.log(`Window is ${this.window} during the break`);
    }
}

ConstructionEquipment.prototype.close = function(){
    this.window = `closed`;
    console.log(`It is ${this.window} during the lesson`);
}

export { ConstructionEquipment };

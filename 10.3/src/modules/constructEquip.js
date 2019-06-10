function ConstructionEquipment(door, window) {
  this.door = door;
  this.window = window;
  this.wall = 4;
  this.doorOfTheOtherRoom = door;

  const lockTheDoor = function(construstEquipParam) {
    //область видимости ограничена функцией-конструктором ConstructionEquipment(){}
    alert(`The door is ${construstEquipParam} before the class`);
  };
  lockTheDoor("locked");

  this.open = function() {
    this.window = "opened";
    if (this.window === this.wall) {
      const alertMistake = "It is a mistake"; //область видимости ограничена блоком {} условного оператора if
      alert(alertMistake);
    }
    console.log(`Window is ${this.window} during the break`);
  };
}

ConstructionEquipment.prototype.close = function() {
  this.window = "closed";
  console.log(`It is ${this.window} during the lesson`);
};

export { ConstructionEquipment };

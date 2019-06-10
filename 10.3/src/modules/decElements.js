function DecorElements(curtains, wall) {
  this.curtains = curtains;
  this.wall = wall;
  this.lighting = "bright";
  this.wallOfTheRoom = wall;

  const paintTheWall = function(decElemParam) {
    // область видимости ограничена функцией-конструктором DecorElements(){}
    alert(`${decElemParam} painting is displayed on the wall`);
  };
  paintTheWall("colorful");

  this.decorWalls = function() {
    this.wall = "abstract art";
    alert(`${this.wall} makes the room more interesting`);
  };
}

DecorElements.prototype.makeComfortable = function() {
  this.curtains = "grey";
  console.log(
    `These ${
      this.curtains
    } curtains hide the sun and let students look at the screen!`
  );
};

DecorElements.prototype.SelectTheSideOfTheWall = function() {
  const wall = "north"; // область видимости ограничена методом SelectTheSideOfTheWall(){}
  switch (wall) {
    case "north":
      const wallIsLocated = "The main side";
      //область видимости ограничена сase "north" (от объявления и инициализации и до 'break')
      text = wallIsLocated;
      break;
    case "east":
      text = "Right side";
      break;
    case "south":
      text = "Back side";
      break;
    case "west":
      text = "Left side";
      break;
  }
};

export { DecorElements };

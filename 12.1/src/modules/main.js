let newArray = [];

const object = {
  selectColour: {
    colour: "black",
    combineColour: {
      tone: "light",
      mainColour: "yellow"
    },
    setColour() {
      console.log(`set colour is ${this.combineColour.mainColour}`);
    }
  },
  size: "S",
  setSize() {
    console.log(`set size is ${this.size}`);
  }
};

object.selectColour = object;

function objectCopy(object) {
  if (newArray.indexOf(object) > -1) {
    return "circular reference";
  }
  newArray.push(object);

  const copycat = {};

  for (let key in object) {
    if (typeof object[key] === "object") {
      copycat[key] = objectCopy(object[key]);
    } else {
      copycat[key] = object[key];
    }
  }
  return copycat;
}
object.size = object;
object.selectColour.combineColour = object;

const object2 = objectCopy(object);
console.log(object2);

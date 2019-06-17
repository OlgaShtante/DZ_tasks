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

newArray.push(object);

function objectCopy(object) {
  if (newArray.indexOf(object) > -1) {
    return "circular reference";
  }

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

const object2 = objectCopy(object);
object.selectColour = object;
object.size = object;

console.log(object2);

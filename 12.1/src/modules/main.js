let newArray = [];
newArray[0] = newArray;

const object = {
  selectColour: {
    colour: "black",
    combineColour: {
      tone: "light",
      mainColour: "yellow"
    },
    setColour() {
      console.log(`colour: ${this.combineColour.tone}`);
    }
  },
  size: "S",
  setSize() {
    console.log(`size: ${this.size}`);
  }
};

newArray.push(object);

function objectCopy(object) {
  if (newArray.indexOf(object) > -1 || newArray[0] === newArray) {
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
console.log(object2);

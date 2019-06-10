import { Teacher } from "./teacher.js";
import { Students } from "./students.js";
import { Furniture } from "./furniture.js";
import { TechEquipment } from "./techEquip.js";
import { ConstructionEquipment } from "./constructEquip.js";
import { DecorElements } from "./decElements.js";
import { Room } from "./room.js";

const realTeacher = new Teacher("Yury", "Tatsenka", 33);
//область видимости ограничена данным модулем main.js и модулем teacher.js
const rusTeacher = new Teacher("Юрий", "Татенко", 33);
//область видимости ограничена данным модулем main.js и модулем teacher.js

const groupOfStudents = new Students(
  //область видимости ограничена данным модулем main.js и модулем students.js
  [
    " Maxim",
    " Alexandr",
    " Alex",
    " Alexey",
    " Tural",
    " Max",
    " Ilya",
    " Vladislav",
    " Eugeniy",
    " Oleg"
  ],
  [" Kristina", " Tanya", " Olga"]
);

const roomFurniture = new Furniture(
  //область видимости ограничена данным модулем main.js и модулем furniture.js
  20,
  1,
  20,
  { size: "middle", quantity: 20 },
  {
    seatMaterial: "fabric",
    chairMaterial: "plastic",
    height: "controllable",
    quantity: 21
  }
);

const roomTechEquipment = new TechEquipment(
  //область видимости ограничена данным модулем main.js и модулем techEquip.js
  {
    monitors: 21,
    systemUnits: 21,
    keyboards: 21,
    mouses: 21,
    speakers: "null",
    michrophones: "null"
  },
  { useful: "yes", working: "yes" },
  { remoteControler: "lost", workingWell: "yes" }
);

const roomConstructionElements = new ConstructionEquipment(
  //область видимости ограничена данным модулем main.js и модулем constructEquip.js
  { material: "wood", size: "standard" },
  {
    material: {
      frameMaterial: "plastic",
      windowMaterial: "glass"
    },
    size: "big"
  }
);

const roomDecorElements = new DecorElements(
  //область видимости ограничена данным модулем main.js и модулем decElements.js
  { type: "roll", material: "fabric" },
  { decorType: "wallPainting", style: "abstractArt" }
);

const room = new Room(
  //область видимости ограничена данным модулем main.js и модулем room.js
  rusTeacher,
  groupOfStudents,
  roomFurniture,
  roomTechEquipment,
  roomConstructionElements,
  roomDecorElements
);
const room57 = new Room(
  //область видимости ограничена данным модулем main.js и модулем room.js
  realTeacher,
  "M-FD2-54-19",
  "chairs and desks",
  "computers",
  roomConstructionElements,
  "Abstract wallPainting"
);

console.log(room57);

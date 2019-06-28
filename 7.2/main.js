window.addEventListener("load", roomDescription);

function roomDescription() {
  function Teacher(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  const realTeacher = new Teacher("Yury", "Tatsenka", 33);
  Teacher.prototype.teaches = function() {
    console.log(`${this.firstName}${this.lastName} teaches JS`);
  };

  function Students(boys, girls) {
    this.boys = boys;
    this.girls = girls;
  }
  const groupOfStudents = new Students(
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
  Students.prototype.study = function() {
    console.log(`these ${this.boys}${this.girls} study JS`);
  };

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

  const roomFurniture = new Furniture(
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
  Furniture.prototype.arrange = function() {
    console.log("Arrange furniture in the room");
  };

  function TechEquipment(computers, projector, airConditioning) {
    this.computers = computers;
    this.projector = projector;
    this.airConditioning = airConditioning;
  }

  const roomTechEquipment = new TechEquipment(
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
  TechEquipment.prototype.use = function() {
    console.log("All equioment can be used");
  };

  function ConstructionEquipment(door, window) {
    this.door = door;
    this.window = window;
  }

  const roomConstructionElements = new ConstructionEquipment(
    { material: "wood", size: "standard" },
    {
      material: {
        frameMaterial: "plastic",
        windowMaterial: "glass"
      },
      size: "big"
    }
  );
  ConstructionEquipment.prototype.open = function() {
    console.log("It is opened during the break");
  };
  ConstructionEquipment.prototype.close = function() {
    console.log("It is closed during the lesson");
  };
  ConstructionEquipment.prototype.lock = function() {
    console.log("It is locked before&after the lesson");
  };

  function DecorElements(curtains, wall) {
    this.curtains = curtains;
    this.wall = wall;
  }

  const roomDecorElements = new DecorElements(
    { type: "roll", material: "fabric" },
    { decorType: "wallPainting", style: "abstractArt" }
  );
  DecorElements.prototype.makeComfortable = function() {
    console.log(`${this.wall} make the room more comfortable!`);
  };

  function Room(
    teacher,
    students,
    furniture,
    techEquipment,
    constructionEquipment,
    decorElements
  ) {
    this.teacher = teacher;
    this.students = students;
    this.furniture = furniture;
    this.techEquipment = techEquipment;
    this.constructionEquipment = constructionEquipment;
    this.decorElements = decorElements;
  }
  const room57 = new Room(
    realTeacher,
    groupOfStudents,
    roomFurniture,
    roomTechEquipment,
    roomConstructionElements,
    roomDecorElements
  );

  Room.prototype.giveNumber = function() {
    console.log("Room 57");
  };
  return room57;
}
const room57 = roomDescription();
document.getElementById("out").innerHTML = JSON.stringify(room57, null, 5);

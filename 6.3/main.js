function toDisplay() {
  function roomDescription() {
    function Teacher(firstName, lastName, age, action) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.action = action;
    }
    let realTeacher = new Teacher("Yury", "Tatsenka", 33, "teachesJS");
    let unrealTeacher = new Teacher("mister", "X", "undefined", "undefined");

    function Students(boys, girls) {
      this.boys = boys;
      this.girls = girls;
    }
    let groupOfStudents = new Students(
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

    let roomFurniture = new Furniture(
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

    function TechEquipment(computers, projector, airConditioning) {
      this.computers = computers;
      this.projector = projector;
      this.airConditioning = airConditioning;
    }

    let roomTechEquipment = new TechEquipment(
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

    function ConstructionElements(door, window) {
      this.door = door;
      this.window = window;
    }

    let roomConstructionElements = new ConstructionElements(
      { material: "wood", size: "standard" },
      {
        material: {
          frameMaterial: "plastic",
          windowMaterial: "glass"
        },
        size: "big"
      }
    );

    function DecorElements(curtains, wall) {
      this.curtains = curtains;
      this.wall = wall;
    }

    let roomDecorElements = new DecorElements(
      { type: "roll", material: "fabric" },
      { decorType: "wallPainting", style: "abstractArt" }
    );

    function Room(
      teacher,
      students,
      furniture,
      techEquipment,
      constractionElements,
      decorElements
    ) {
      this.teacher = teacher;
      this.students = students;
      this.furniture = furniture;
      this.techEquipment = techEquipment;
      this.constractionElements = constractionElements;
      this.decorElements = decorElements;
    }

    let room = new Room(
      realTeacher,
      groupOfStudents,
      roomFurniture,
      roomTechEquipment,
      roomConstructionElements,
      roomDecorElements
    );

    return room;
  }

  const room = roomDescription();
  document.getElementById("out").innerHTML = JSON.stringify(room, null, 10);
}

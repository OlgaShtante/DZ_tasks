function roomDescription() {
  let teacher = {};
  teacher.firstName = "Yury";
  teacher.lastName = "Tatsenka";
  teacher.age = 33;
  teacher.teaches = {
    subject: "JS",
    teaches: function teachesJavaScript() {
      alert("Don't send g****code to me!");
    }
  };

  let students = {
    studentsNames: [
      " Maxim",
      " Alexandr",
      " Alex",
      " one more Alexey",
      " Tural",
      " one more Maxim",
      " Ilya",
      " Tanya",
      " Vladislav",
      " Eugeniy",
      " Oleg",
      " Kristina",
      " Olga"
    ]
  };
  students.studentsStudying = function studentsStudying() {
    alert("Answer please my questions");
  };

  let furniture = {
    computerDesks: 20,
    teacherDesk: 1,
    chairs: 20,
    studyDesks: {
      size: "middle",
      quantity: 20
    },
    rollingChairs: {
      seatMaterial: "fabric",
      chairMaterial: "plastic",
      height: "controllable",
      quantity: 21
    },
    countPlacesForStudents() {
      let desks = 20;
      let chairs = 20;
      let studentPlaces = desks + chairs;
      if (desk !== chairs) {
        alert("Student places have not complete set");
      }
      alert(studentPlaces);
    }
  };

  let techEquipment = {
    computers: {
      turnOn() {
        alert("Turn me On");
      },
      turnOff() {
        alert("Turn me Off");
      },
      monitors: 21,
      systemUnits: 21,
      keyboards: 21,
      mouses: 21,
      speakers: "null",
      michrophones: "null"
    },
    projector: {
      useful: "yes",
      working: "yes"
    },
    showsPresentation() {},
    airСonditioning: {
      remoterControler: "lost",
      workingWell: "yes",
      airCirculationFunction() {},
      airHeating() {}
    }
  };

  let constructionRoomElements = {
    door: {
      doorOpens() {},
      doorCloses() {},
      material: "wood",
      size: "standard"
    },
    window: {
      material: {
        frameMaterial: "plastic",
        windowMaterial: "glass"
      },
      size: "big"
    }
  };
  let windowOpened = () => {
    console.log("Array function test");
  };
  constructionRoomElements.window.windowOpened = windowOpened;

  let windowClosed = function() {
    console.log("method closedWindow is called");
  };
  constructionRoomElements.windowClosed = window.windowClosed;

  let decorRoomElement = {
    curtains: {
      type: "roll",
      material: "fabric"
    },
    wall: {
      type: "wallPainting",
      style: "abstractArt"
    }
  };
  function openedCurtains() {
    curtains.status = ["opened", "closed"];
  }

  let room = {};
  room.teacher = teacher;
  room.students = students;
  room.furniture = furniture;
  room.techEquipment = techEquipment;
  room.constructionRoomElements = constructionRoomElements;
  room.decorRoomElement = decorRoomElement;

  // Alert of some objects' details:
  let intro =
    "Group M_FD2-54-19 has classes in the Room#57 every Saturday. The following students attend these classes: ";

  alert(
    intro +
      students.studentsNames +
      " \n\n" +
      "Their teacher is " +
      room.teacher.firstName +
      " " +
      room.teacher.lastName +
      " " +
      ", he teaches them " +
      teacher.teaches.subject +
      ".\n" +
      'Other details you could find in the "hash.js".'
  );
}

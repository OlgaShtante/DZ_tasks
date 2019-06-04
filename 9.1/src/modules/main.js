import { Teacher } from './teacher.js';
import { Students } from './students.js';
import { Furniture } from './furniture.js';
import { TechEquipment } from './techEquip.js';
import { ConstructionEquipment } from './constructEquip.js';
import { DecorElements } from './decElements.js';


const realTeacher = new Teacher("Yury", "Tatsenka", 33);
const rusTeacher = new Teacher("Юрий", "Татенко", 33);

const groupOfStudents = new Students(
    [' Maxim', ' Alexandr', ' Alex', ' Alexey', ' Tural', ' Max', ' Ilya', ' Vladislav', ' Eugeniy', ' Oleg'],
    [' Kristina', ' Tanya', ' Olga' ]
);

const roomFurniture = new Furniture(
    20,
    1, 
    20, 
    {"size":"middle", "quantity": 20}, 
    {"seatMaterial":"fabric",
     "chairMaterial": "plastic", 
     "height":"controllable", 
     "quantity":21}
);

const roomTechEquipment = new TechEquipment(
    {"monitors":21, "systemUnits":21, "keyboards":21, "mouses":21, "speakers":"null", "michrophones": "null"},
    {"useful":"yes", "working": "yes"},
    {"remoteControler":"lost", "workingWell":"yes"}
);

const roomConstructionElements = new ConstructionEquipment(
    {"material":"wood", "size":"standard"},
    {"material":{
                "frameMaterial":"plastic", 
                "windowMaterial":"glass"
                }, 
    "size":"big"});

const roomDecorElements = new DecorElements(
        {"type":"roll", "material":"fabric"},
        {"decorType":"wallPainting", "style":"abstractArt"}
);

function Room(teacher, students, furniture, techEquip, constructEquip, decElements){
}

const room57 = new Room(realTeacher, groupOfStudents, roomFurniture, roomTechEquipment, roomConstructionElements, roomDecorElements);

room57.realTeacher = realTeacher;
room57.rusTeacher = rusTeacher;
room57.groupOfStudents = groupOfStudents;
room57.roomFurniture = roomFurniture;
room57.roomTechEquipment = roomTechEquipment;
room57.roomConstructionElements = roomConstructionElements;
room57.roomDecorElements = roomDecorElements;

debugger;
console.log(room57);



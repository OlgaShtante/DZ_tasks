import { Teacher } from './teacher.js';
import { Students } from './students.js';
import { Furniture } from './furniture.js';
import { TechEquipment } from './techEquip.js';
import { ConstructionEquipment } from './constructEquip.js';
import { DecorElements } from './decElements.js';
import { Room } from './room.js';

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

const room = new Room(rusTeacher, groupOfStudents, roomFurniture, roomTechEquipment, roomConstructionElements, roomDecorElements);
const room57 = new Room(realTeacher, "M-FD2-54-19", "chairs and desks", "computers", roomConstructionElements, 'Abstract wallPainting');

console.log(room57);



function Language() {
  const language = "I'm the main object";
}
//Создание базового объекта 1, на основании которого
//будут созданы все остальные объекты по цепочке прототипирования

function ForeignLanguage() {}
//cоздание объекта 2 на основе базового объекта 1,
//свойство __proto__ объекта 2 указывает на объект 1,
//Foreign.prototype указывает на объект 2,
//свойство конструктор объекта 2 указывает на Foreign.prototype.

ForeignLanguage.prototype = Object.create(Language.prototype);
//создание объекта 3,
// свойство __proto__ объекта 3 указывает на объект 4,
//ForeignLanguage.prototype теперь указывает на объект 3,
//ForeignLanguage.prototype больше не указывает на объект 2.

ForeignLanguage.prototype.constructor = ForeignLanguage;
//Свойство constructor объекта 3 указывает на ForeignLanguage

function SlovenianLanguage(read, speak) {}
//создание SlovenianLaguage, объекта 5 на основе базового объекта 1,
//свойство __proto__объекта 5 указывает на объект 1
SlovenianLanguage.prototype = Object.create(ForeignLanguage.prototype);
//создание объекта 6,
//свойство __proto__ объекта 6 указывает на объект 3,
//Slovenian.prototype теперь указывает на объект 6,
//Slovenian.prototype больше не указывает на объект 5.
SlovenianLanguage.prototype.constructor = SlovenianLanguage;
//свойство constructor объекта 6 указывает на SlovenianLanguage

const learnSlovenian = new SlovenianLanguage(
  "read Slovenian books",
  "communicate with native speakers"
);
//создание объекта 7 на основе объекта 6,
//соnst learnSlovenian указывает на объект 7

console.log(learnSlovenian);

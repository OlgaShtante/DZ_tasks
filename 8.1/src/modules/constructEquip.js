function ConstructionEquipment(door, window) {
  this.door = door;
  this.window = window;
}

ConstructionEquipment.prototype.open = function() {
  const openConstructionElem = "It is opened during the break";
  console.log(openConstructionElem);
  return openConstructionElem;
};
ConstructionEquipment.prototype.close = function() {
  const closeConstructionElem = "It is closed during the lesson";
  console.log(closeConstructionElem);
  return closeConstructionElem;
};
ConstructionEquipment.prototype.lock = function() {
  const lockConstructionElem = "It is locked before the lesson";
  console.log(lockConstructionElem);
  return lockConstructionElem;
};

export { ConstructionEquipment };

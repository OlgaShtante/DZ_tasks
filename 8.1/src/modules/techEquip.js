function TechEquipment(computers, projector, airConditioning) {
  this.computers = computers;
  this.projector = projector;
  this.airConditioning = airConditioning;
}

TechEquipment.prototype.use = function() {
  const useTechEquip = "All equipment can be used";
  console.log(useTechEquip);
  return useTechEquip;
};

export { TechEquipment };

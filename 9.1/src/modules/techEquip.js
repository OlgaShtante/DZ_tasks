const techEquipParam = "working well";

function TechEquipment(computers, projector, airConditioning){
  this.computers = computers;
  this.projector = projector; 
  this.airConditioning = airConditioning;
  this.computers = techEquipParam;
  this.lighting = "on";

  const workOfTheDevice = function(techEquipParam){
    const airConditioning = `hardly works`;
    alert(`It seems, all devices ${techEquipParam} in the room.
           But air conditioning is ${airConditioning}`);
  } 
  workOfTheDevice('work well');
  
    this.turnOff = function() {
    this.computers =`off`;
      alert( `Turn ${this.computers} computer when you leave a lesson` );
    }
  }

TechEquipment.prototype.switchOffTheLight = function(){
  this.lighting = `off`;
  console.log(`Switch ${this.lighting} the light before leaving!`);
}

export { TechEquipment };

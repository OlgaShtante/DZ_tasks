function DecorElements(curtains, wall){
    this.curtains = curtains;
    this.wall = wall;
}

DecorElements.prototype.makeComfortable = function(){
    const wallArt = 'Painting on the wall';
    const makeComfort = `${wallArt} makes the room more comfortable!`;
console.log(makeComfort);
return makeComfort;
}

export { DecorElements };
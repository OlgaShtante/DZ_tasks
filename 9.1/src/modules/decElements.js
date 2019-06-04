const decElemParam = "art";

function DecorElements(curtains, wall){
    this.curtains = curtains;
    this.wall = wall;
    this.lighting = "bright";
    this.wall = decElemParam;

    const paintTheWall = function(decElemParam){
      alert(`${decElemParam} painting is displayed on the wall`);
    } 
    paintTheWall('colorful');
      
    this.decorWalls = function() {
    this.wall =`abstract art`;
    alert( `${this.wall} makes the room more interesting` );
    }
    }

DecorElements.prototype.makeComfortable = function(){
this.curtains = "grey";
console.log(`These ${this.curtains} curtains hide the sun and let students look at the screen!`)
}

export { DecorElements };
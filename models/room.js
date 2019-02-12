const Room = function(name, squareArea){
  this.name = name;
  this.squareArea = squareArea;
  this.painted = 0;
}

Room.prototype.paintSquareArea = function(){
  this.painted += 1;
}


module.exports = Room

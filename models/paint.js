const Paint = function(volume){
  this.volume = volume;
}

Paint.prototype.checkEmpty = function(){
  if(this.volume === 0){
    return true;
  };
};

Paint.prototype.emptyItself = function(){

  return this.volume -= this.volume;
};



module.exports = Paint

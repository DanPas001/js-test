var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "Teal";
ctx.fillRect(0, 0, 1280, 720);

var bee = function (x, y){
  ctx.lineWidth = 10;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x,y,50,true);
  circle(x,y,50,false);
  circle(x-20,y-30,20,false);
  circle(x+20,y-30,20,false);
}
var update = function(coordinate){
  var offset = Math.random()*4-2;
  coordinate += offset;

  if(coordinate > 500){
    coordinate = 500;
  }

  if(coordinate < 0){
    coordinate = 0;
  }

  return coordinate;

}

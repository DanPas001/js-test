var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "Teal";
ctx.fillRect(0, 0, 640, 480);

var bee = function (x, y){
  ctx.lineWidth = 2;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x,y,8,true);
  circle(x,y,8,false);
  circle(x-5,y-11,5,false);
  circle(x+5,y-11,5,false);
}

var update = function(coordinate){
  var offset = Math.random()*4-2;
  coordinate += offset;

  if(coordinate > 200){
    coordinate = 200;
  }

  if(coordinate < 0){
    coordinate = 0;
  }

  return coordinate;

}

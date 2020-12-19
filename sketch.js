


var car1;

var wall1;

var deformation;
function setup() {
  createCanvas(800,100);
  
  car=createSprite(10,50,20,20);
  
  wall=createSprite(790,55,15,50);
  
 
}

function draw() {
  background(0); 


  car.shapeColor="white";

  car.velocityX=4;
  car.velocityY=0;
  
if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityx=0;
  var deformation=0.5;
if(deformation>180){
  car.shapeColor=(255,0,0);
}
if(deformation<180 && deformation>100){
car.shapeColor=(229,228,0);

}
if(deformation<100){
car.shapeColor=(0.255,0);
}
}

  drawSprites();
}
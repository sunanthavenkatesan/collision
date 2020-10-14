var movingRect;
var gameobject1,gameobject2;
var someshobj

function setup() {
  createCanvas(1200,800);
  gameobject1 = createSprite(600, 400, 50, 80);
  gameobject1.shapeColor = "green";

  gameobject2 = createSprite(400, 400, 50, 80);
  gameobject2.shapeColor = "green";

  someshobj = createSprite(300, 600, 50, 80);
  someshobj.shapeColor = "yellow";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect,someshobj)){
  movingRect.shapeColor = "blue";
  someshobj.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  someshobj.shapeColor = "green";
 }
  drawSprites();
}



function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  
      return true;
}
else {
  return false;
}
}
var fixedRect, movingRect;

var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car =createSprite (50,100,50,50);
  car.shapeColor = "yellow";
  car.velocityX=2;

  wall = createSprite(600,100,60,100);
  wall.shapeColor ="black";
}


function draw() {
  background(255,255,255); 

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

// if(isTouching(wall,car)){
//   car.velocityX=0;
//   movingRect.shapeColor = "blue";
// }

bounceOff(movingRect,fixedRect);
  drawSprites();
 

}
function bounceOff(object1,object2){
  if(object1.x-object2.x <object2.width/2 + object1.width/2
      && object2.x-object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX=object2.velocityX *  (-1);
        object2.velocityX=object1.velocityX*  (-1);
        

      }
      
      if(object1.y-object2.y <object2.width/2 + object1.width/2
        && object2.y-object1.y < object2.width/2 + object1.width/2) {
          object1.velocityY=object1.velocityY *  (-1);
          object2.velocityY=object2.velocityY*  (-1);

}

}
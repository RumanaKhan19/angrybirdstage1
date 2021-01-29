var movingRect,fixedRect;




function setup() {
  createCanvas(800,400);
fixedRect=createSprite(300,400,50,80);
fixedRect.shapeColor="green";
fixedRect.debug=true;

movingRect=createSprite(500,300,80,50);
movingRect.shapeColor="green";
movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x  < fixedRect.width /2+movingRect.width/2 &&
    movingRect.x-fixedRect.x < fixedRect.width /2+movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";




  }




  drawSprites();
}
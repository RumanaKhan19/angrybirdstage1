const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine,world,object;
var ground,ball;




function setup() {
   var canvas= createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;

   var ground_options={
     isStatic: true
   }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  
  ball=Bodies.circle(200,100,20);
  World.add(world,ball);
  console.log(ground);
}


function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
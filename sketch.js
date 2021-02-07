const World= Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
var engine, world;
var ground,ball;




function setup() {
  var canvas= createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options= {
    isStatic:true
  }
  ground=Bodies.rectangle(10,390,200,20,ground_options);
  World.add(world,ground);
  var ball_options= {
    isStatic:true
  }
  ball=Bodies.circle(200,200,40,ball_options);
  World.add(world,ball);
}

function draw() {
  background("pink"); 
Engine.update(engine);
rect(ground.position.x,ground.position.y,1000,40);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
  
}
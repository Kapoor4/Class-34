const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var bob;
var engine;
var world;
var rope;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14;

function setup() {
  createCanvas(3000,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1300,20);

  b1 = new Box(900,100,70,70);
  b2 = new Box(900,100,70,70);
  b3 = new Box(900,100,70,70);
  b4 = new Box(900,100,70,70);
  b5 = new Box(900,100,70,70);
  b6 = new Box(900,100,70,70);
  b7 = new Box(800,100,70,70);
  b8 = new Box(800,100,70,70);
  b9 = new Box(800,100,70,70);
  b10 = new Box(700,100,70,70);
  b11 = new Box(700,100,70,70);
  b12 = new Box(700,100,70,70);
  b13 = new Box(700,100,70,70);
  b14 = new Box(700,100,70,70);

  bob = new Bob(200,70,70);

  rope = new Rope(bob.body, {x:450, y:50});
 
}

function draw() {
  background(180,180,180);  
  Engine.update(engine);
  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  bob.display();

  rope.display();

}

function mouseDragged(){

  Matter.Body.setPosition(bob.body, {x: mouseX, y: mouseY});

}
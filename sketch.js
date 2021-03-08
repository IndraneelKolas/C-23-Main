const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3, box4, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200, 390, 400, 10)
    box1 = new Box1(240, 100, 50, 100)
  
  
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var engine, world, k;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(340,785,900,30);
  for(k = 0; k <= width; k += 80){
    divisions.push(new division(k,650,10,divisionHeight));
  }
  for(var j = 40; j <= width; j += 50){
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15; j <= width - 10; j += 50){
    plinkos.push(new plinko(j,175));
  }
  for(var j = 40; j <= width; j += 50){
    plinkos.push(new plinko(j,275));
  }
  for(var j = 15; j <= width - 10; j += 50){
    plinkos.push(new plinko(j,375));
  }
}

function draw() {
  background("grey");
  Engine.update(engine);
  if(frameCount % 40 == 0){
    particles.push(new particle(random(width/2-10, width/2+10), 10, 10));
  }
  ground1.display();
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }
}
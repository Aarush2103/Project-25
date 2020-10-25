
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bin1;
var ground;
var paper;


function setup() {
	createCanvas(1600, 700);
     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(1200,500);
	ground = new Ground(width/2,670,width,20);

	paper = new Paper(200,450,70);
	//Matter.paper.circle(200,10,20);

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  ground.display();
  bin1.display();
  paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300});
  
	}
}



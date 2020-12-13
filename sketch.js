
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var stone,mango;
var boy,boyImg;

function preload(){
boyImg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1500, 700);
	boy=createSprite(200,600,20,50);
	boy.addImage(boyImg);
	boy.scale=0.15

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(this.x,this.y,this.width,this.height);
	//stone.depth=boy.depth+1;
   //mango=new Mango(this.x,this.y,this.r);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  drawSprites();
 
}




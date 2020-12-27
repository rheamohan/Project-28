
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var enigine,world;

var ground;
var boy,boyImg;
var tree,treeImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stone;
var sling;

function preload(){

	boyImg = loadImage("Sprites/boy.png");
	treeImg = loadImage("Sprites/tree.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Bodies
	ground = new Ground(750,680,1500,25);

	mango1 = new Mango(995,260);
	mango2 = new Mango(1270,95);
	mango3 = new Mango(1190,160);
	mango4 = new Mango(1090,320);

	mango5 = new Mango(1190,250);
	mango6 = new Mango(1370,220);
	mango7 = new Mango(1080,190);
	mango8 = new Mango(1300,320);
	mango9 = new Mango(1290,240);

	stone = new Stone(170,545);

	sling = new Sling(stone.body,{x:180, y:40});

	tree = createSprite(1200,375);
	tree.scale = 0.5;
	tree.addImage(treeImg);

	boy = createSprite(250,604);
	boy.scale = 0.1;
	boy.addImage(boyImg);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(247,102,152);
  
  Engine.update(engine);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  
  
  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  sling.display();

  stone.display();
  ground.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
	sling.fly();
Matter.Body.applyForce(stone.body,stone.body.position,{x:20,y:-383});
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<-lmango.r+lstone.r){
		Matter.Body.isStatic(lmango.body,false);
	}
}




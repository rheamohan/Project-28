
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

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

	mango1 = new Mango(995,260,60,60);
	mango2 = new Mango(1270,95,60,60);
	mango3 = new Mango(1190,160,60,60);
	mango4 = new Mango(1090,320,60,60);
	mango5 = new Mango(1190,250,60,60);
	mango6 = new Mango(1370,220,60,60);
	mango7 = new Mango(1080,190,60,60);
	mango8 = new Mango(1300,320,60,60);
	mango9 = new Mango(1290,240,60,60);

	stone = new Stone(195,545,30,30);

	// A SLING (line) 
	sling = new Sling(stone.body,{x:235, y:550});

	tree = createSprite(1200,375);
	tree.scale = 0.5;
	tree.addImage(treeImg);

	boy = createSprite(290,604);
	boy.scale = 0.1;
	boy.addImage(boyImg);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(247,102,152);
  
  Engine.update(engine);

// STONE AND MANGO SHOULD COLLIDE WITH EACH OTHER
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

// WHEN MOUSE IS DRAGGED STONE.BODY SHOULD MOVE ACC. TO THE MOUSE
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

//WHEN MOUSE IS RELEASED THE FORCE SHOULD BE APPLIED ON STONE's BODY 
//AND ITs POSITION. ACCORDING TO THE x And y COORDINATES
	function mouseReleased(){
	//SLING's VALUE SHOULD BE NULL (check ling.js)
	sling.fly();
	Matter.Body.applyForce(stone.body,stone.body.position,{x:20,y:-10});

}

//dectectCollision on lstone and lmango

// mango and stoneBody's Position is equal to lmango and lstone body's
// position
function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

// DISTANCE = STONE AND MONGO BODY'S x AND y POSITION
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

//STONE AND MONGO BODY'S x AND y POSITION(distance) IS EQUAL TO 45 THEN
//lmango.body IS NOT STATIC;
	if(distance<=45){
	Matter.Body.setStatic(lmango.body,false);
	}
}

// IF 32=SPACE KEY IS PRESSED THEN SLING SHOULD ATTACH
	function keyPressed(){
		if (keyCode===32){
			//SEE SLING.JS
			sling.attach(stone.body);
		}
	}
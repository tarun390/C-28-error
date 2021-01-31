const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, boy;

function preload(){
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1300, 550);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(230,469,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	ground = new Ground(650, 545, 1300, 10);
	tree = new Tree(1100, 300, 0,0);
	mango = new Mango(1200, 160, 50);
	mango1 = new Mango(750, 160, 90);
	mango2 = new Mango(1000, 200, 80);
	mango3 = new Mango(850, 100, 70);
	mango4 = new Mango(910, 130, 90);
	mango5 = new Mango(850, 200, 70);
	mango6 = new Mango(620, 170, 40);
	mango7 = new Mango(710, 230, 30);
	mango8 = new Mango(650, 250, 60);

	stone = new Stone(130, 490, 20);
	slingShot = new SlingShot(stone.body, {x:180, y:405});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(160,10,255);
	ground.display();
	tree.display();
	mango.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	slingShot.display();
	detectCollision(stone, mango);
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
console.log(stone)
	drawSprites();
	stone.display();

}

function detectCollision(lstone, lmango) {

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	
	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
	
function mouseReleased(){	
	slingShot.fly()	;
}

function keyPressed(){
    if(keyCode === 32 && stone.body.speed < 1){
		stone.trajectory = [];
      	Matter.Body.setPosition(stone.body, {x:235, y:42});
    	slingShot.attach(stone.body);
	}
}
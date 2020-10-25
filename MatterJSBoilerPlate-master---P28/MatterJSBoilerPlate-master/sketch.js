
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Costraint = Matter.Costraint

var boy_image,boy;
var ground,stone,tree,tree_img
,mango1,mango2,mango3,mango4;
var slingshot


function preload()
{
	boy_image = loadImage("boy.png");
	tree_img = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(400,735,50,50)
	boy.addImage("boy_standing",boy_image);
	boy.scale = 0.1

	tree = createSprite(900,500,100,200);
	tree.addImage("treeImage",tree_img)
	tree.scale = 0.7


	ground = new Ground(600,800,1200,5);
	stone = new Stone(350,670,50,50);
	mango1 = new Mango(900,200,15);
	mango3 = new Mango(700,350,15);
	mango2 = new Mango(1000,250,15);
	mango4 = new Mango(800,220,15);

	slingshot = new SlingShot(stone.body,{x:350,y:670});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  drawSprites();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  slingshot.display();

}


function detectCollision (Lstone,Lmango){
mangoBodyPosition=lmango.body.mangoBodyPosition
stoneBodyPosition=lstone.body.mangoBodyPosition

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y )
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	 slingshot.fly()
	}
	

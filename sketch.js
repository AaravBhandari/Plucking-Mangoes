
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
g1 = new Ground (600,590,1200,100)
m1 = new Mango (620,300,50)
m2 = new Mango (660,280,50)
m3 = new Mango (700,220,50)
m4 = new Mango (730,320,50)
m5 = new Mango (760,220,50)
m6 = new Mango (800,260,50)
s1 = new Stone (120,400,50)

l1 = new Launcher (s1.body,{x:136,y:400})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  image(tree,550,150,300,400);
  g1.display()
  image(boy,100,325,150,300);
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  s1.display()
  l1.display()
  detectCollision(s1,m1)
  detectCollision(s1,m2)
  detectCollision(s1,m3)
  detectCollision(s1,m4)
  drawSprites();
 
}

function mouseDragged (){

	Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY}) 
	
	} 
	
	function mouseReleased () {

		l1.fly()
		
		}

	function detectCollision (stonee,lmango){

		mangoBodyPosition = lmango.body.position
		stoneeBodyPosition = stonee.body.position
  
    var distance =dist (stoneeBodyPosition.x,stoneeBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance <=lmango.r+stonee.r)
   {
     Matter.Body.setStatic(lmango.body,false);
   }

	}


function keyPressed(){

if (keyCode === 32){
	Matter.Body.setPosition(s1.body,{x:120,y:400})
	l1.attach(s1.body);
}


}



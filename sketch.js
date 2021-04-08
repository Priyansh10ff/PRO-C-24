
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red");

	paper= new Paper(100,620,50);

   	
	dustbin1 = new Dustbin(600,638,150,20);
	dustbin2 = new Dustbin(523,605,20,90);
	dustbin3 = new Dustbin(673,605,20,90);

	Engine.run(engine);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-85});
	}
}



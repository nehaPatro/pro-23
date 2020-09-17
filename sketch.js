var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

var rect1,rect2,rect3;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;
	rect1 = new Rect(400,540,200,20)
	rect2 = new Rect(490,480,20,100)
    rect3 = new Rect(310,480,20,100)
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
   fill(255)
  text(mouseX + "," + mouseY,10,15)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




var bg;
var ground;
var elsa,elsaImage;




function preload(){
bg=loadImage("assets/bg3.jpg");

//elsaImage=loadImage()



}





function setup() {
  createCanvas(800,400);
  ground=createSprite(500,200,width,height);
  ground.addImage("ground",bg);
  ground.scale=2;
 ground.velocityX=-3;

 elsa=createSprite(50,100)

}

function draw() {
  background(255,255,255);
  if (ground.x<0) {
    ground.x=ground.width/2;
  } 
  elsa.y=World.mouseY;
  drawSprites();
}
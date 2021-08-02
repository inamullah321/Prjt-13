var boy, path, leftBondary, rightBoudry;
function preload(){
  //pre-load animation and image

boyImg=loadAnimation("Runner-1.png", "Runner-2.png");
pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(600,600);
  //create sprites here

path=createSprite(200,200);
path.addImage(pathImg);
path.velocity=5;
path.scale=1.2;

leftBoundary=createSprite(0,300,80,400);
rightBoudary=createSprite(380,300,80,400);
leftBoundary.visible=false;
rightBoudary.visible=false;

boy=createSprite(180,340,50,170);
boy.addAnimation(jackImg)
}

function draw() {
  background(blue);
  boy.x=World.mouseX

  if(path.y > 400){
    path.y=height/2;
  }
boy.collide(leftBondary);
boy.collide(rightBoudary);
edges=createEdgeSprites();
boy.collide(edges[3]);
drawSprites();
}


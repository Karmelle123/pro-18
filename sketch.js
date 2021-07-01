var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(190,350)
  ghost.addImage("ghost",ghostImg)
ghost.scale=0.3
doorsGroup = new Group()
climbersGroup = new Group()
}

function draw() {
  background(200);
  if(keyDown(LEFT_ARROW)){
    ghost.x=ghost.x-3
  }

  if(keyDown(RIGHT_ARROW)){
    ghost.x=ghost.x+3
  }

  if(keyDown("space")){
    ghost.velocityY=-3
  }
  ghost.velocityY=ghost.velocityY+0.8

  if(tower.y > 400){
      tower.y = 300
  }

  if(climbersGroup.isTouching(ghost)){
ghost.destroy()
doorsGroup.destroyEach()
climbersGroup.destroyEach()
tower.velocityY=0


}

  
   climber()
    drawSprites()
}

function climber(){
  if(frameCount%250===0){
    var door=createSprite(200,-50);
    var climber=createSprite(200,10);
    door.addImage(doorImg)
    climber.addImage(climberImg);
    door.velocityY=3
    climber.velocityY=3
    door.x=Math.round(random(120,400));
    climber.x=door.x
    ghost.depth=door.depth;
    ghost.depth+=1
    door.lifetime=300
    climber.lifetime=300
    doorsGroup.add(door)
    climbersGroup.add(climber)
  }
}

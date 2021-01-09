var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstaclesGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
  
  score = 0;  
}


function draw() {
background("white");
  
  stroke("white");
  textSize(20);
  fill('white')
  text("score: "+score,500,50);
  
  stroke("white");
  textSize(20);
  fill("black")
  survivalTime=Math.round(frameCount/frameRate());
  text(" survival Time: "+survivalTime,100,50)
  
  
  ground.x = ground.width/2;
 // console.log(ground.x);
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 1;
  
    monkey.collide(ground);
  
  createbanana();
  createobstacle();
  
  if(obstaclesGroup.isTouching(monkey)){
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0); 
    bananasGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
    
      
    
  }
  
  
    
  drawSprites()
  
  
}
function createbanana(){
  if(frameCount % 80 ===0){
   banana = createSprite(600,250,400,10);
   banana.addImage(bananaImage);
   banana.y = random(120,200);
    //console.log(banana.y);
   banana.scale = 0.06;
   banana.velocityX = -5; 
    banana.lifeTime = 300;
    banana.depth = banana.depth +1;
    bananasGroup.add(banana);
      }  
}

function createobstacle(){
  if (frameCount % 300 ===0){
     obstacle = createSprite(800,315,10,40);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -6       ;
    obstacle.scale = 0.2;
    obstacle.lifeTime = 300;
  obstaclesGroup.add(obstacle);
  }
}

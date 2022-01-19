var snow,snowImg
var bgImg

function preload() {
  //adding imgs
  snowImg = loadImage("snow4.webp");
  bgImg = loadImage("snowfall1.gif");
}

function setup() {
  //cresting canvas
  createCanvas(690,420);
}

function draw() {
  background(bgImg);  
  drawSprites();
  createsnow();
}

//creating snow
function createsnow(){
  if(frameCount%10===0){
  snow = createSprite(random(0,800), 0, 50, 50);
  snow.velocityX = -2;
  snow.velocityY = 4;
  snow.addImage(snowImg);
  snow.scale = 0.1;
  }
}



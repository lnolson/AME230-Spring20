let positionX;
let positionY;
let radius;
let velocityX;
let velocityY;

function setup() {
  createCanvas(800, 600);
  
  positionX = 400.0;
  positionY = 300.0;
  radius = 30.0;
  velocityX = 4.5;
  velocityY = -1.5;
}

function draw() {
  background(128);
  
  positionX += velocityX;
  positionY += velocityY;
  
  if (positionX + radius > width) {
    positionX = width - radius;
    velocityX *= -1.0
  }
  else if (positionX - radius < 0.0) {
    positionX = radius;
    velocityX *= -1.0;
  }
  if (positionY + radius > height) {
    positionY = height - radius;
    velocityY *= -1.0;
  }
  else if (positionY - radius < 0.0) {
    positionY = radius;
    velocityY *= -1.0;
  }
  
  stroke(0);
  fill(255);
  ellipse(positionX, positionY, radius * 2.0, radius * 2.0);
}
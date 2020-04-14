let x = 0.0;
let y = 0.0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  // move the origin to the center
  translate( 300, 200 );
  // Show where origin starts
  stroke(180);
  line(-600, 0, 600, 0);
  line(0, -600, 0, 600);
  
  stroke(0);
  line(-600, 90, 600, 90);
  // move the cart object
  translate(x,y);
  rect( -100, -50, 200, 100 );
  
  
  drawWheel( -55, 50);
  
  drawWheel( 55, 50);
}

function drawWheel(wheelX, wheelY) {
  let wheelRadius = 40.0;
  push();
  translate(wheelX, wheelY);
  let wheelRotate = x / wheelRadius;
  rotate(wheelRotate);
  ellipse( 0, 0, wheelRadius * 2.0, wheelRadius * 2.0);
  line(-wheelRadius, 0, wheelRadius, 0);
  line(0, -wheelRadius, 0, wheelRadius);
  pop();
}

function mouseDragged() {
  let dx = mouseX - pmouseX;
  x = x + dx;
}
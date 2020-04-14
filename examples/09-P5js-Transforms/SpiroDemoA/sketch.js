// The first demo of the SpiroGraph inspired tracing program.
// Use translate and rotate to move shapes.

let x = 300.0;
let y = 200.0;
let vx = -2.0;
let vy = 1.0;

let a1 = 0.0;

let tracing = true;

let tColor;


function setup() {
  createCanvas(600, 400);
  background(220);
  tColor = color(0,0,220,40);
}

function draw() {
  if (tracing == false) {
    background(220);
  }

  push(); // save the current transformation state
  
  noStroke();
  translate(x,y);
  if (tracing == false) {
    fill(0, 200, 0);
    ellipse(0,0,60,60);
  }
  
  fill(tColor);
  rotate(a1);
  translate(40,0);
  ellipse(0,0,10,10);
  
  pop(); // restore the transformation to previously saved state
  
  a1 = a1 + 0.06;
  x = x + vx;
  y = y + vy;
  
  if (x > width) {
    vx = vx * -1.0;
    tColor = color(random(80,240),0,0,40);
  }
  else if (x < 0.0) {
    vx = vx * -1.0;
    tColor = color(0,random(80,240),0,40);
  }
  if (y > height) {
    vy = vy * -1.0;
    tColor = color(0,0,random(80,240),40);
  }
  else if (y < 0.0) {
    vy = vy * -1.0;
    tColor = color(random(80,240),0,random(80,240),40);
  }
}

function keyPressed() {
  if (key == 't') {
    tracing = !tracing;
    background(220);
  }
}
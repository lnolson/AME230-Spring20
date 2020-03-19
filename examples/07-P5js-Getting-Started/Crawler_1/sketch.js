let x = 0.0;
let y = 0.0;
let w = 60.0;
let h = 40.0;

// state == 0 moving up
// state == 1 moving right
// state == 2 moving down
// state == 3 moving left
let state = 1;

let speed = 4.0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(128);
  
  if (state == 0) {
    y -= speed;
    if (y < 0.0) {
      y = 0.0;
      state = 1;
    }
  }
  else if (state == 1) {
    x += speed;
    if (x + w > width) {
      x = width - w;
      state = 2;
    }
  }
  else if (state == 2) {
    y += speed;
    if (y + h > height) {
      y = height - h;
      state = 3;
    }
  }
  else {
    x -= speed;
    if (x < 0.0) {
      x = 0.0;
      state = 0;
    }
  }
  
  // Draw the crawler object
  stroke(0);
  fill(220);
  rect(x, y, w, h);
  
}